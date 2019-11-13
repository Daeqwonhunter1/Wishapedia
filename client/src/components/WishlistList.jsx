import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CreateItem from './CreateItem';

export default function WishlistList(props) {
  const { wishlists } = props
  console.log(wishlists)
  return (
    <div>

      <Link to="/wishlists/new">
        <button>Add Wishlist</button>
      </Link>


      <h2>WishlistList component</h2>

      {wishlists && wishlists.map(wishlist =>
        <div className="wishlist" key={wishlist.id}>
          <Link to={`/wishlists/${wishlist.id}`}><h3>wishlist name: {wishlist.name}</h3></Link>
          <p>description: {wishlist.description}</p>
          <p>occasion: {wishlist.type}</p>
          <Link to={`/wishlists/{wishlist.id}/items/new`}>
            <button>Add Item</button>
          </Link>

        </div>
      )}

    </div>
  )
}