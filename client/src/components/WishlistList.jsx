import React, { Component } from 'react'

export default function WishlistList(props) {
  const { wishlists } = props
  return (
    <div>
      <h2>WishlistList component</h2>

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