import React, { Component } from 'react';
import { Router, withRouter } from 'react-router-dom';
import UpdateItemForm from './UpdateItemForm';
import CreateItem from './CreateItem';
import ItemList from './ItemList';
import { showitemsInWishList, showOneItemFromWishList, postNewItemInWishList, destroyOneItem }
  from '../services/api-helper';





class ItemContainer extends Component {
  state = {
    currentItemContainer: null,
    items: [],
    itemFormData: {
      name: null,
      image_url: null,
      url: null,
      price: null,
      comments: null
    }
  }
  componentDidMount() {
    this.getAllItems();
  }

  // =============== Read ===============

  getAllitems = async () => {
    const items = await showitems()
    this.setState({ items })
  }


  // =============== Create ===============

  createWishlist = async () => {
    const newItems = await postItems(this.state.itemsFormData);
    this.setState(prevState => ({
      items: [...prevState.items, newItems]
    }))
    this.props.history.push("/items")
  }

  // =============== Delete ===============

  destroyItems = async (wishListId, itemId) => {
    await destroyOneItem(itemId);
    this.setState(prevState => ({
      items: prevState.wishlists.filter(items => {
        return items.id !== itemsId
      })
    }))
    this.props.history.push(`/wishlists/${wishListId}/items/${itemId}`)
  }

  // =============== Update ===============

  updateItems = async (wishListId, itemId, wishlistData) => {
    const updatedItems = await UpdateOneItems(itemsId, this.state.itemsFormData);
    this.setState(prevState => ({
      items: prevState.items.map(wishlist =>
        item.id === parseInt(itemId)
          ? updatedItemslist
          : items)
    }))
    this.props.history.push(`/wishlists/${wishListId}/items/${itemId}`)
  }

  // =============== Set State Helper ===============

  setItemFormData = (items) => {
    this.setState({
      itemsFormData: {
        name: items.name,
        image_url: items.image_url,
        url: items.url,
        price: items.price,
        comments: items.comments
      }
    })
    this.props.history.push(`/wishlists/${wishlist.id}/items/${itemId}/edit`)
  }

  render() {

    return (
      <div>
        <Route exact path='/' render={() => (<ItemList itemList={this.state.items} />)} />
        <Route exact path='/items' render={() => (<ItemList itemList={this.state.itemsList} />)} />

        <Route exact path='/wishlists/:wishlistId/items/:itemId' render={(props) => {
          const wishlistId = props.match.params.wishlistId;
          const itemId = props.match.params.itemId;
          const currentWishlist = this.state.wishlists.find(wishlist => {
            return wishlist.id === parseInt(wishlistId)
          })
          return <SingleWishList
            setWishlistFormData={this.setWishlistFormData}
            destroyWishlist={this.destroyWishlist}
            currentWishlist={currentWishlist}
            currentUser={this.props.currentUser}
          />
        }} />
        <Route path='/wishlists/:wishlistId/items/new' render={() => (
          <CreateItem
            createItemList={this.createItemList}

          />
        )} />
        <Route path='/wishlists/:wishlistId/items/:itemId/edit' render={(props) => (
          <UpdateItemForm
            wishlistId={props.match.params.ItemsId}
            updateWishlist={this.updateItems}
            handleWishListChange={this.handleItemsChange}
            items={this.state.itemsFormData}
          />
        )} />

      </div>
    )
  }
}
export default withRouter(ItemContainer);

