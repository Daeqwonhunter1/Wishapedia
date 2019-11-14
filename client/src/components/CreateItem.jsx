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
    return (
      <div id="create-item-div">
        <form className="create-form" onSubmit={(e) => {
          e.preventDefault();
          this.props.createItem(this.props.currentWishlistId, this.state);
        }}>
          <h2 className="create-header">Create New Item</h2>

          <input placeholder="Name Of The Item"
            className="input-fields"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name} />
          <input placeholder="Item Image"
            className="input-fields"
            type="text"
            name="image_url"
            onChange={this.handleChange}
            value={image_url} />
          <input placeholder="Item Link"
            className="input-fields"
            type="text"
            name="url"
            onChange={this.handleChange}
            value={url} />
          <input placeholder="Price"
            className="input-fields"
            type="text"
            name="price"
            onChange={this.handleChange}
            value={price} />
          <input placeholder="Comments"
            className="input-fields"
            type="text"
            name="comments"
            onChange={this.handleChange}
            value={comments} />

          <button className="create-button" >
            Create
        </button>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateItem)