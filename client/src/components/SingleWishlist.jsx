import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import ItemList from './ItemList';
import { UpdateOneItem, showItemsInWishlist, showOneItemFromWishlist, postNewItemInWishlist, destroyOneItem }
  from '../services/api-helper';

class SingleWishlist extends Component {
  state = {
    currentWishlist: null,
    currentItems: []
  }
  destroyItem = async (wishlistId, itemId) => {
    await destroyOneItem(wishlistId, itemId);
    this.setState(prevState => ({
      items: prevState.currentItems.filter(items => {
        return items.id !== parseInt(itemId)
      })
    }))
    this.props.history.push(`/wishlists`)
  }

  setCurrentWishlist = async () => {
    console.log(this.props);

    const currentWishlist = this.props.currentWishlist
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

  render() {
    const { currentWishlist } = this.state;
    const { currentUser } = this.props;

    return (
      <div id="single-wishlist">
        {/* <h2>SingleWishlist component</h2> */}

        {currentWishlist && (
          <>
            <h3>{currentWishlist.name}</h3>
            <p>{currentWishlist.type} </p>
            <p>{currentWishlist.description}</p>
            {
              currentUser && currentUser.id === currentWishlist.userId && (
                <>
                  <button onClick={() => {
                    this.props.destroyWishlist(currentWishlist.id)
                  }}>Delete Wishlist</button>

                  <Link to={`/wishlists/${currentWishlist.id}/edit`}>
                    <button>Edit Wishlist</button>
                  </Link>
                </>
              )
            }
            <Link to={`/wishlists/${currentWishlist.id}/items/new`}>
              <button>Add Item</button>
            </Link>
          </>
        )}

        <ItemList
          items={this.state.currentItems}
          destroyItem={this.destroyItem}
        />



      </div>
    )
  }
}
export default withRouter(SingleWishlist)