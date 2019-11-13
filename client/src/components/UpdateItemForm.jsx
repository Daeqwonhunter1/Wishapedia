import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { UpdateOneItem } from '../services/api-helper'

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
        comments,
        ...otherData
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


  updateItems = async (wishlistId, itemId, itemFormData) => {
    const updatedItems = await UpdateOneItem(itemId, itemFormData);
    this.setState({
      name: "",
      image_url: "",
      url: "",
      price: "",
      comments: ""
    })
    this.props.items.map(item =>
      item.id === parseInt(itemId)
        ? itemFormData
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

      <div>

        <form onSubmit={(e) => {
          e.preventDefault();
          this.UpdateItemForm(this.props.itemId, this.state);
        }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="image_url">image url</label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            value={image_url}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="url">description</label>
          <input
            type="text"
            name="url"
            id="url"
            value={url}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="price">price</label>
          <input
            type="text"
            name="price"
            id="price"
            value={price}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="comments">comments</label>
          <input
            type="text"
            name="comments"
            id="comments"
            value={comments}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>

    )
  }
}

export default withRouter(UpdateItemForm)