import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SingleItem extends Component {
  state = {
    currentItem: null
  }

  setCurrentItem = () => {
    console.log(this.props);
    const currentItem = this.props.currentItem
    this.setState({ currentItem })
  }

  componentDidMount() {
    this.setCurrentItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.wishlistId !== this.props.wishlistId) {
      this.setCurrentItem();
    }
  }

  render() {
    const { currentItem } = this.state;
    // const { currentUser } = this.props;

    return (
      <div>
        <h2>Single Item component</h2>

        {currentItem && (
          <>
            <h3>{currentItem.name}</h3>
            <img src={currentItem.image} alt=""></img>
            <p>{currentItem.url} </p>
            <p>{currentItem.price}</p>
            <p>{currentItem.comments}</p>



            {/* {
              currentUser && currentUser.id === currentItem.userId && (
                <>
                  <button onClick={() => {
                    this.props.destroyItem(currentItem.id)
                  }}>Delete Item</button>
                  <Link to={`/posts/${currentItem.id}/edit`}>
                    <button>Edit</button>
                  </Link>
                </>
              )
            } */}
          </>
        )}
      </div>
    )
  }
}
