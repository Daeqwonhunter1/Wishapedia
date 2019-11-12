import React, { Component } from 'react'

export default function CreateWishlist(props) {
  return (
    <div>
      <h2>CreateWishlist component</h2>
      <form onSubmit={props.createWishlist} >
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={props.handleWishListChange}
          value={props.wishlistFormData.name}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={props.handleWishListChange}
          value={props.wishlistFormData.description}
        />

        <input
          type="text"
          name="type"
          placeholder="Type or occasion of wishlist"
          onChange={props.handleWishListChange}
          value={props.wishlistFormData.type}
        />


        <input type="submit" value="Submit" />

      </form>
    </div>
  )
}