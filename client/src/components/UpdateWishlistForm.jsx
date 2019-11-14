import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class UpdateWishlistForm extends Component {
  state = {
    name: "",
    description: "",
    type: ""
  }
  setFormData = () => {
    if (this.props.wishlists.length) {
      const {
        name,
        description,
        type
      } = this.props.wishlists.find(wishlist => {
        return wishlist.id === parseInt(this.props.wishlistId)
      })
      this.setState({
        name,
        description,
        type
      })
    }
  }
  componentDidMount() {
    this.setFormData();
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  updateWishlist = async (wishlistId) => {
    this.setState({
      name: null,
      description: null,
      type: null
    })
    this.props.getAllWishlists()
    this.props.history.push(`/wishlists/${wishlistId}`)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.wishlists !== this.props.wishlists) {
      this.setFormData();
    }
  }
  render() {
    const { name, description, type } = this.state;
    return (
      <div>
        <h2>UpdateWishlistForm</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.updateWishlist(this.props.wishlistId, this.state);
        }}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="description">description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="type">type</label>
          <input
            type="text"
            name="type"
            id="type"
            value={type}
            onChange={this.handleChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default withRouter(UpdateWishlistForm)