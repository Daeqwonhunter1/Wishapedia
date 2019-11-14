import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import UpdateItemForm from './UpdateItemForm';
import CreateItem from './CreateItem';
import { showItemsInWishlist, postNewItemInWishlist } from '../services/api-helper';

class ItemContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentItemContainer: " ",
      items: []
    }
  }

  componentDidMount() {
    this.getAllitems();
  }

  // =============== Read ===============

  getAllitems = async () => {
    const items = await showItemsInWishlist()
    this.setState({ items })
  }


  // =============== Create ===============

  createItem = async (id, newItem) => {

    const newItems = await postNewItemInWishlist(id, newItem);
    this.setState(prevState => ({
      items: [...prevState.items, newItems]
    }))

    this.props.history.push(`/wishlists/${id}`)
  }


  render() {

    return (
      <div>
        <Route path='/wishlists/:wishlistId/items/new' render={(props) => (
          <CreateItem
            createItem={this.createItem}
            currentWishlistId={props.match.params.wishlistId}
          />
        )} />

        <Route path='/wishlists/:wishlistId/items/:itemId/edit' render={(props) => (
          <UpdateItemForm
            itemId={props.match.params.itemId}
            wishlistId={props.match.params.wishlistId}
            updateItems={this.updateItems}
            handleItemChange={this.handleItemChange}
            ItemFormData={this.state.ItemFormData}
            items={this.state.items}
          />
        )} />
      </div>
    )
  }
}
export default withRouter(ItemContainer);

