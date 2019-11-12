import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import UpdateItemForm from './UpdateItemForm';
import CreateItem from './CreateItem';
import ItemList from './ItemList';
import SingleWishList from './SingleWishlist'
import { UpdateOneItem, showItemsInWishList, showitemsInWishList, showOneItemFromWishList, postNewItemInWishlist, destroyOneItem }
  from '../services/api-helper';





class ItemContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentItemContainer: " ",
      items: [],
      itemFormData: {
        name: " ",
        image_url: " ",
        url: " ",
        price: 0,
        comments: " "
      }
    }
  }


  componentDidMount() {
    this.getAllitems();
  }

  // =============== Read ===============

  getAllitems = async () => {
    const items = await showItemsInWishList()
    this.setState({ items })
  }


  // =============== Create ===============

  createItem = async (id, newItem) => {

    // this.setState({ itemFormData: { name, image_url, url, price, comments } })
    const newItems = await postNewItemInWishlist(1, newItem);
    this.setState(prevState => ({
      items: [...prevState.items, newItems]
    }))
    console.log(newItems)
    //  this.props.history.push(`/wishlists/${wishListId}/items`)
  }

  // =============== Delete ===============

  destroyItems = async (wishListId, itemId) => {
    await destroyOneItem(itemId);
    this.setState(prevState => ({
      items: prevState.wishlists.filter(items => {
        return items.id !== itemId
      })
    }))
    this.props.history.push(`/wishlists/${wishListId}/items/${itemId}`)
  }

  // =============== Update ===============

  updateItems = async (wishListId, itemId, wishlistData) => {
    const updatedItems = await UpdateOneItem(itemId, this.state.itemsFormData);
    this.setState(prevState => ({
      items: prevState.items.map(item =>
        item.id === parseInt(itemId)
          ? updatedItems
          : item)
    }))
    this.props.history.push(`/wishlists/${wishListId}/items/${itemId}`)
  }

  // =============== Set State Helper ===============

  setItemFormData = (wishlist, itemId, items) => {
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
        {/* <Route exact path='/wishlists/:wishlistId/items' render={() =>
          (<ItemList itemList={this.state.itemsList} />)} />
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
        }} /> */}
        <Route path='/wishlists/:wishlistId/items/new' render={() => (
          <CreateItem
            createItem={this.createItem}
            currentWishListId={this.props.match.params.wishListId}

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

