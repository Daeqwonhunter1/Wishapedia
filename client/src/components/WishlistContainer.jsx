import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import {
  showWishlists, postWishlist, destroyOneWishlist, UpdateOneWishlist
} from '../services/api-helper'
import WishlistList from './WishlistList';
import CreateWishlist from './CreateWishlist';
import SingleWishlist from './SingleWishlist';
import UpdateWishlistForm from './UpdateWishlistForm';

class WishlistContainer extends Component {

  state = {
    currentWishlist: null,
    wishlists: [],
    wishlistFormData: {
      name: null,
      description: null,
      type: null
    }
  }

  componentDidMount() {
    this.getAllWishlists();
  }

  // =============== HANDLE CHANGE ===============

  handleWishlistChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      wishlistFormData: {
        ...prevState.wishlistFormData,
        [name]: value
      }
    }))
  }

  // =============== Read ===============

  getAllWishlists = async () => {
    const wishlists = await showWishlists()
    this.setState({ wishlists })
  }


  // =============== Create ===============

  createWishlist = async () => {
    const newWishlist = await postWishlist(this.state.wishlistFormData);
    this.setState(prevState => ({
      wishlists: [...prevState.wishlists, newWishlist]
    }))
    this.props.history.push("/wishlists")
  }

  // =============== Delete ===============

  destroyWishlist = async (wishlistId) => {
    await destroyOneWishlist(wishlistId);
    this.setState(prevState => ({
      wishlists: prevState.wishlists.filter(wishlist => {
        return wishlist.id !== wishlistId
      })
    }))
    this.props.history.push("/wishlists")
  }

  // =============== Update ===============

  updateWishlist = async (wishlistId) => {
    const updatedWishlist = await UpdateOneWishlist(wishlistId, this.state.wishlistFormData);
    this.setState(prevState => ({
      wishlists: prevState.wishlists.map(wishlist =>
        wishlist.id === parseInt(wishlistId)
          ? updatedWishlist
          : wishlist)
    }))
    this.props.history.push("/wishlists")
  }

  // =============== Set State Helper ===============

  setWishlistFormData = (wishlist) => {
    this.setState({
      wishlistFormData: {
        name: wishlist.name,
        description: wishlist.description,
        type: wishlist.type
      }
    })
    this.props.history.push(`/wishlists/${wishlist.id}/edit`)
  }

  render() {

    return (
      <div>
        <Route exact path='/' render={() => (<WishlistList wishlists={this.state.wishlists} />)} />
        <Route exact path='/wishlists' render={() => (<WishlistList wishlists={this.state.wishlists} />)} />

        <Route exact path='/wishlists/:wishlistId' render={(props) => {
          const wishlistId = props.match.params.wishlistId;
          const currentWishlist = this.state.wishlists.find(wishlist => {
            return wishlist.id === parseInt(wishlistId)
          })
          return <SingleWishlist
            setWishlistFormData={this.setWishlistFormData}
            destroyWishlist={this.destroyWishlist}
            currentWishlist={currentWishlist}
            currentUser={this.props.currentUser}
            wishlistId={wishlistId}
          />
        }} />
        <Route path='/wishlists/new' render={() => (
          <CreateWishlist
            createWishlist={this.createWishlist}
            handleWishlistChange={this.handleWishlistChange}
            wishlistFormData={this.state.wishlistFormData}
          />
        )} />
        <Route path='/wishlists/:wishlistId/edit' render={(props) => (
          <UpdateWishlistForm
            wishlistId={props.match.params.wishlistId}
            updateWishlist={this.updateWishlist}
            handleWishlistChange={this.handleWishlistChange}
            wishlistFormData={this.state.wishlistFormData}
          />
        )} />

      </div>
    )
  }
}
export default withRouter(WishlistContainer);
