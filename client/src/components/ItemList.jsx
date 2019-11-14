
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  verifyUser
} from '../services/api-helper'


class ItemList extends Component {
  state = {
    currentUser: ""
  }

  async componentDidMount() {
    const currentUser = await verifyUser();
    this.setState({
      currentUser
    })
  }
 

  render() {
    const { items } = this.props
    const { currentUser } = this.state

    console.log(`${currentUser.id}: ${currentUser.username}`)

    return (
      <div>
        {items && items.map(item =>
          <div className="item" key={item.id}>
           <h3>{item.name}</h3>
          <img src={item.image_url} alt={item.name}></img>
          <br></br>
          <a href={item.url}>Link to site</a>
          <p>PRICE: {item.price}</p>
          <p>COMMENTS: {item.comments}</p>

            {currentUser && currentUser.id === item.userId && (
              <>
                <button id={item.id}
                  onClick={() => { this.props.destroyItem(item.wishlistId, item.id) }}>
                  DESTROY {item.name}</button>
                <Link to={`/wishlists/${item.wishlistId}/items/${item.id}/edit`}><button>Edit Item</button></Link>
              </>
            )}

          </div>
        )}

      </div>
    )
  }
}
export default withRouter(ItemList);
