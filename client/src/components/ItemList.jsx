import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { destroyOneItem } from '../services/api-helper';
import WishlistList from './WishlistList';


export default function ItemList(props) {
  console.log("itemlist", props)
  const { currentUser } = props;
  const { items } = props


  // const destroyItem = async (wishlistId, itemId) => {
  //   await destroyOneItem(wishlistId, itemId);
  //   this.setState(prevState => ({
  //     items: prevState.wishlists.filter(items => {
  //       return items.id !== itemId
  //     })
  //   }))
  //   this.props.history.push(`/wishlists/${wishlistId}/items/${itemId}`)
  // }

  return (
    <div>

      <h2>ItemList component</h2>

      {items && items.map(item =>
        <div className="item" key={item.id}>
          <p>name: {item.name}</p>
          <img src={item.image_url} alt={item.name}></img>
          <p>url: {item.url}</p>
          <p>price: {item.price}</p>
          <p>comments: {item.comments}</p>
          <p>{item.id}</p>
          <p>{item.wishlistId}</p>
          <button id={item.id}
            onClick={() => { props.destroyItem(item.wishlistId, item.id ) }}>
            DESTROY {item.name}</button>




          {/* Item isn't assigned to user id */}
          {/* {
              currentUser && currentUser.id === item.userId && (
                <>
                  <button id={item.id}
                onClick={props.destroyItem}>
                DESTROY {item.name}</button>
                
                
                  <Link to={`/posts/${item.id}/edit`}>
                    <button>Edit</button>
                  </Link>
                </>
              )
            } */}
        </div>
      )}

    </div>
  )

}