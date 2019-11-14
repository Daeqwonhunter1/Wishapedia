import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class UpdateItemForm extends Component {
  state = {
    name: "",
    image_url: "",
    url: "",
    price: "",
    comments: ""
  }

  setFormData = () => {
    if (this.props.items.length) {
      const {
        name,
        image_url,
        url,
        price,
        comments
      } = this.props.items.find(item => {
        return item.id === parseInt(this.props.itemId)
      })
      this.setState({
        name,
        image_url,
        url,
        price,
        comments,
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

  updateItems = async (wishlistId, itemId, itemData) => {
    this.setState({
      name: "",
      image_url: "",
      url: "",
      price: "",
      comments: ""
    })
    this.props.items.map(item =>
      item.id === parseInt(itemId)
        ? itemData
        : item)

    this.props.history.push(`/wishlists/${wishlistId}`)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items) {
      this.setFormData();
    }
  }

  render() {
    const { name, image_url, url, price, comments, } = this.state;

    return (

      <div id="update-item-div">
        <form className="update-form" onSubmit={(e) => {
          e.preventDefault();
          this.updateItems(this.props.wishlistId, this.props.itemId, this.state);
        }}>
          <h2 className="update-header">Update Item</h2>

          {/* <label htmlFor="name">Name</label> */}
          <input
            className="input-fields"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          {/* <label htmlFor="image_url">image url</label> */}
          <input
            className="input-fields"
            type="text"
            name="image_url"
            id="image_url"
            value={image_url}
            onChange={this.handleChange}
          />
          <br />
          {/* <label htmlFor="url">url</label> */}
          <input
            className="input-fields"
            type="text"
            name="url"
            id="url"
            value={url}
            onChange={this.handleChange}
          />
          <br />
          {/* <label htmlFor="price">price</label> */}
          <input
            className="input-fields"
            type="text"
            name="price"
            id="price"
            value={price}
            onChange={this.handleChange}
          />
          <br />
          {/* <label htmlFor="comments">comments</label> */}
          <input
            className="input-fields"
            type="text"
            name="comments"
            id="comments"
            value={comments}
            onChange={this.handleChange}
          />
          <button className="create-button">Submit</button>
        </form>
      </div>

    )
  }
}

export default withRouter(UpdateItemForm)