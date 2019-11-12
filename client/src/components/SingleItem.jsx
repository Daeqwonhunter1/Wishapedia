import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SingleItem extends Component {
  state = {
    currentItemlist: null
  }

  setCurrentItemlist = () => {
    console.log(this.props);
    const currentItemlist = this.props.currentItemlist
    this.setState({ currentItemlist })
  }

  componentDidMount() {
    this.setCurrentItemlist();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.wishlistId !== this.props.wishlistId) {
      this.setCurrentItemlist();
    }
  }

  render() {
    const { currentItemlist } = this.state;
    const { currentUser } = this.props;

    return (
      <div>
        <h2>SingleWishlist component</h2>

        {currentItemlist && (
          <>
            <h3>{currentItemlist.name}</h3>
            <img src={currentItemlist.image} alt=""></img>
            <p>{currentItemlist.url} </p>
            <p>{currentItemlist.price}</p>
            <p>{currentItemlist.comments}</p>
            {
              currentUser && currentUser.id === currentItemlist.userId && (
                <>
                  <button onClick={() => {
                    this.props.destroyItem(currentItemlist.id)
                  }}>Delete</button>
                  <Link to={`/posts/${currentItemlist.id}/edit`}><button>Edit</button></Link>
                </>
              )
            }
          </>
        )}
      </div>
    )
  }
}
