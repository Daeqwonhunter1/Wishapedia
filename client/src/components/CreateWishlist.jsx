import React from 'react'
export default function CreateWishlist(props) {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.createWishlist();
      }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={props.handleWishlistChange}
          value={props.wishlistFormData.name}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={props.handleWishlistChange}
          value={props.wishlistFormData.description}
        />
        <input
          type="text"
          name="type"
          placeholder="Type or occasion of wishlist"
          onChange={props.handleWishlistChange}
          value={props.wishlistFormData.type}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}