import React from 'react'
export default function CreateWishlist(props) {
  return (
    <div id="create-wishlist-div">
      <form className="create-form" onSubmit={(e) => {
        e.preventDefault();
        props.createWishlist();
      }}>
        <h2 className="create-header">Create Wishlist</h2>

        <input
          className="input-fields"
          type="text"
          name="name"
          placeholder="Name"
          onChange={props.handleWishlistChange}
          value={props.wishlistFormData.name}
        />
        <input
          className="input-fields"
          type="text"
          name="description"
          placeholder="Description"
          onChange={props.handleWishlistChange}
          value={props.wishlistFormData.description}
        />
        <input
          className="input-fields"
          type="text"
          name="type"
          placeholder="Type or occasion of wishlist"
          onChange={props.handleWishlistChange}
          value={props.wishlistFormData.type}
        />
        <input className="create-button" type="submit" value="Submit" />
      </form>
    </div>
  )
}