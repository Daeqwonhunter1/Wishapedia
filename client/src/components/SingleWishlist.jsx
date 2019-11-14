import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import ItemList from './ItemList';
import { showItemsInWishlist, destroyOneItem, showOnewishlists }
  from '../services/api-helper';
import UpdateItemForm from './UpdateItemForm'

class SingleWishlist extends Component {
  state = {
    currentWishlist: null,
    currentItems: []
  }
  destroyItem = async (wishlistId, itemId) => {
    await destroyOneItem(wishlistId, itemId);
    this.setState(prevState => ({
      currentItems: prevState.currentItems.filter(items => (
        items.id !== parseInt(itemId)
      ))
    }))
    this.props.history.push(`/wishlists/${wishlistId}`)
  }

  setCurrentWishlist = async () => {

    const currentWishlist = await showOnewishlists(this.props.wishlistId);

    this.setState({ currentWishlist })

    const items = await showItemsInWishlist(this.props.wishlistId);

    const newItems = items.filter(item =>
      item.wishlistId === parseInt(this.props.wishlistId))

    this.setState({ items: newItems })
  }

  setCurrentItemlist = async () => {

    const allItems = await showItemsInWishlist(this.props.wishlistId);

    const currentItems = allItems.filter(item =>
      item.wishlistId === parseInt(this.props.wishlistId))

    this.setState({ currentItems })
  }

  async componentDidMount() {
    await this.setCurrentWishlist();
    await this.setCurrentItemlist();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.wishlistId !== this.props.wishlistId) {
      await this.setCurrentWishlist();
      await this.setCurrentItemlist();
    }
  }

  async cancelModal() {
    document.getElementById("modal").style.display = "none";
 

  }

  render() {
    const { currentWishlist } = this.state;
    const { currentUser } = this.props;

    return (
      <div id="single-wishlist">

        {currentWishlist && (
          <>
            <h3>{currentWishlist.name}</h3>
            <h4>{currentWishlist.type} </h4>
            <h4>{currentWishlist.description}</h4>

            {
              currentUser && currentUser.id === currentWishlist.userId && (
                <>
                  <button onClick={() => {
                    this.props.DoYouWantTodestroyWishlist(currentWishlist.id)
                  }}>Delete Wishlist</button>
                  <div id='modal'>
                    <div id='modal-content'>
                      <h1>Are You Sure?</h1>
                    <span onClick = {this.cancelModal} id="close">&times;</span>
                    <button onClick={() => {
                      this.props.destroyWishlist(currentWishlist.id)
                    }}>Yes</button>

                   
                     <button onClick = {this.cancelModal}>No</button>
                    
                    </div>
                    </div>
                  <Link to={`/wishlists/${currentWishlist.id}/edit`}>
                    <button>Edit Wishlist</button>
                  </Link>
                  <Link to={`/wishlists/${currentWishlist.id}/items/new`}>
                    <button>Add Item</button>
                  </Link>
                </>
              )
            }
          </>
        )}

        <ItemList
          items={this.state.currentItems}
          destroyItem={this.destroyItem}
          currentUser={this.props.currentUser}
        />

      </div>
    )
  }
}
export default withRouter(SingleWishlist)