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
    this.getAllWishlists()
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
    this.getAllWishlists()
    this.props.history.push("/wishlists")
  }

  render() {

    return (
      <div>
        <Route exact path='/' render={() => (<WishlistList wishlists={this.state.wishlists}
          getAllWishlists={this.getAllWishlists} />)} />

        <Route exact path='/wishlists' render={() => (<WishlistList wishlists={this.state.wishlists} />)} />

        <Route exact path='/wishlists/:wishlistId' render={(props) => {
          const wishlistId = props.match.params.wishlistId;
          const currentWishlist = this.state.wishlists.find(wishlist => {
            return wishlist.id === parseInt(wishlistId)
          })
          return <SingleWishlist
            destroyWishlist={this.destroyWishlist}
            currentWishlist={currentWishlist}
            currentUser={this.props.currentUser}
            wishlistId={wishlistId}
          />
        }} />
        <Route path='/wishlists/new' render={() => (
          <CreateWishlist
            createWishlist={this.createWishlist}
            handleWishListChange={this.handleWishListChange}
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
            wishlists={this.state.wishlists}
            getAllWishlists={this.getAllWishlists}
          />
        )} />
      </div>
    )
  }
}
export default withRouter(WishlistContainer);
