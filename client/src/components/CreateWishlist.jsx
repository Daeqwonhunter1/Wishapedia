import React, { Component } from 'react'

export default function CreateWishlist(props) {
  return (
    <div>
      <h2>CreateWishlist component</h2>
      <form onSubmit={props.handleSubmit} >
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={props.handleChange}
          value={props.formData.name} />

        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={props.handleChange}
          value={props.formData.description} />

        <input
          type="text"
          name="occasion"
          placeholder="Occasion/Type"
          onChange={props.handleChange}
          value={props.formData.type} />


        <input type="submit" value="Create Wishlist" />

      </form>
    </div>
  )
}