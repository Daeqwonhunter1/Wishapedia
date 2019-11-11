import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default function WishlistList(props) {
  const { wishlists } = props
  return (
    <div>
      {wishlists && wishlists.map(wishlist =>
        <div className="wishlist" key={wishlist.id}>
          <h3>wishlist name: {wishlist.name}</h3>
          <p>description: {wishlist.description}</p>
          <p>occassion: {wishlist.type}</p>
        </div>
      )}

    </div>
  )
}