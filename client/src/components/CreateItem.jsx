import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CreateItem extends Component {
  state = {
    name: "",
    image_url: "",
    url: "",
    price: "",
    comments: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { name, image_url, url, price, comments } = this.state;
    console.log(this.props)
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.createItem(this.props.currentWishlistId, this.state);
        }}>
          <input placeholder="Name Of The Item"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name} />
          <input placeholder="Item Image"
            type="text"
            name="image_url"
            onChange={this.handleChange}
            value={image_url} />
          <input placeholder="Item Link"
            type="text"
            name="url"
            onChange={this.handleChange}
            value={url} />
          <input placeholder="Price"
            type="text"
            name="price"
            onChange={this.handleChange}
            value={price} />
          <input placeholder="Comments"
            type="text"
            name="comments"
            onChange={this.handleChange}
            value={comments} />

          <button>
            Create
        </button>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateItem)