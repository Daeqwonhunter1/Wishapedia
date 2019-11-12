import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SingleWishlist extends Component {
  state = {
    currentWishlist: null
  }

  setCurrentWishlist = () => {
    console.log(this.props);
    const currentWishlist = this.props.currentWishlist
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

    return (
      <div>
        <h2>SingleWishlist component</h2>

        {currentWishlist && (
          <>
            <h3>{currentWishlist.name}</h3>
            <p>{currentWishlist.type} </p>
            <p>{currentWishlist.description}</p>
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
            <Link to={`/wishlists/${currentWishlist.id}/items/new`}>
              <button>Add Item</button>
            </Link>
          </>
        )}
      </div>
    )
  }
}
