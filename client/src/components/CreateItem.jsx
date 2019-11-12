import React, { Component } from 'react'

export default class CreateItem extends Component(props) {
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
    const { name, image_url, url, price,comments } = this.state;
    return (
    <div>
        <h2>CreateItem component</h2>
        
      <form onSubmit={(e) => {
          e.preventDefault();
          this.props.createItem(this.state);
        }}>
          <input placeholder="Name Of The Item"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}/>
          <input placeholder="Item Image"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={image_url}/>
          <input placeholder="Item Link"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={url}/>
          <input placeholder="Price"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={price} />
          <input placeholder="Comments"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={comments} />
          
        <button>
          Create
        </button>
      </form>
    </div>
  )}
}