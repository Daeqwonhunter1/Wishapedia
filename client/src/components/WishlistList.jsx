import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default function WishlistList(props) {
  const { wishlists } = props
  return (
    <div>

      <h2>WishlistList component</h2>

      {wishlists && wishlists.map(wishlist =>
        <div className="wishlist" key={wishlist.id}>
          <Link to={`/wishlists/${wishlist.id}`}><h3>wishlist name: {wishlist.name}</h3></Link>
          <p>description: {wishlist.description}</p>
          <p>occasion: {wishlist.type}</p>
          <button>Add Item</button>

        </div>
      )}

    </div>
  )
}