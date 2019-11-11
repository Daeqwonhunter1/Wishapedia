import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SingleWishlist extends Component {
  state = {
    currentWishlist: null
  }

  setCurrentWishlist = () => {
    const currentWishlist = this.props.wishlists.find(wishlist => wishlist.id === parseInt(this.props.wishlistId))
    this.setState({ currentWishlist })
  }

  componentDidMount() {
    this.setCurrentWishlist();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.wishlistId !== this.props.wishlistId) {
      this.setCurrentWishlist();
    }
  }

  render() {
    const { currentWishlist } = this.state;
    const { currentUser } = this.props;

    console.log(currentWishlist);
    console.log(currentUser);

    return (
      <div>
        <h2>SingleWishlist component</h2>

        {currentWishlist && (
          <>
            <h1>{currentWishlist.title}</h1>
            <img src={currentWishlist.image_url} />
            <p>{currentWishlist.description}</p>
            <h3>Fun Fact!</h3>
            <p>{currentWishlist.fun_fact}</p>
            {
              currentUser && currentUser.id === currentWishlist.userId && (
                <>
                  <button onClick={() => {
                    this.props.destroyPost(currentWishlist.id)
                  }}>Delete</button>
                  <Link to={`/posts/${currentWishlist.id}/edit`}><button>Edit</button></Link>
                </>
              )
            }
          </>
        )}
      </div>
    )
  }
}
