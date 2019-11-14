import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { showWishlists } from '../services/api-helper';

class WishlistList extends Component {
  state = {
    wishlists: []
  }

  componentDidMount() {
    const wishlists = showWishlists();
    this.setState = {
      wishlists
    }
  }

  render() {

    const { wishlists } = this.props
    this.setState = {
      wishlists
    }

    return (
      <div id="wishlist-list">
        <Link to="/wishlists/new">
          <div class="plus radius">
          </div>

        </Link>
        <h2>All Wishlists</h2>

        <div id = "wishlists">
          {wishlists && wishlists.map(wishlist =>
            <div className="wishlist" key={wishlist.id}>
              <Link to={`/wishlists/${wishlist.id}`}><h3>wishlist name: {wishlist.name}</h3></Link>
              <p>description: {wishlist.description}</p>
              <p>occasion: {wishlist.type}</p>
              <p>created by: {wishlist.user.username}</p>

            </div>
          )}
        </div>
      </div>
    )
  }
}
export default withRouter(WishlistList)