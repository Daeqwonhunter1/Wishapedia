import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { showItemsInWishList } from '../services/api-helper'
import ItemList from './ItemList';

export default class SingleWishlist extends Component {
  state = {
    currentWishlist: null,
    currentItems: []
  }


  setCurrentWishlist = async () => {
    console.log(this.props);

    const currentWishlist = this.props.currentWishlist
    this.setState({ currentWishlist })


    const items = await showItemsInWishList(this.props.wishlistId);

    const newItems = items.filter(item =>
      item.wishlistId === parseInt(this.props.wishlistId))

    this.setState({ items: newItems })
  }

  setCurrentItemlist = async () => {

    const allItems = await showItemsInWishList(this.props.wishlistId);

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
      <div>
        <h2>SingleWishlist component</h2>

        {currentWishlist && (
          <>
            <h3>{currentWishlist.name}</h3>
            <p>{currentWishlist.type} </p>
            <p>{currentWishlist.description}</p>
            {
              currentUser && currentUser.id === currentWishlist.userId && (
                <>
                  <button onClick={() => {
                    this.props.destroyPost(currentWishlist.id)
                  }}>Delete</button>
                  <Link to={`/posts/${currentWishlist.id}/edit`}><button>Edit</button></Link>
                </>
              )
            }
            <Link to={`/wishlists/${currentWishlist.id}/items/new`}>
              <button>Add Item</button>
            </Link>
          </>
        )}

        <ItemList items={this.state.currentItems} />

      </div>
    )
  }
}
