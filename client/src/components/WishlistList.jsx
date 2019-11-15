import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { showWishlists } from '../services/api-helper';

class WishlistList extends Component {
  state = {
    wishlists: []
  }

  componentDidMount() {
    const wishlists = showWishlists();
    console.log(wishlists)
    this.setState = {
      wishlists
    }
  }
  descriptionModal = () => {
    document.getElementsByClassName("description-modal").style.display = "block"
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

        <div id="wishlists">
          {wishlists && wishlists.map(wishlist =>
            <div className="wishlist" key={wishlist.id}>
              <Link to={`/wishlists/${wishlist.id}`}><h1>{wishlist.name}</h1></Link>
              <p className="for">For: {wishlist.type}</p>
              <p className="created-by">created by: {wishlist.user.username}</p>
              <div  className="description-modal">
                <div className="description-content">
                  <p className="description">{wishlist.description}</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    )
  }
}
export default withRouter(WishlistList)