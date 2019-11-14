import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemList(props) {
  console.log("itemlist", props)
  const { items } = props

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

          <button id={item.id}
            onClick={() => { props.destroyItem(item.wishlistId, item.id) }}>
            DESTROY {item.name}</button>

          <Link to={`/wishlists/${item.wishlistId}/items/${item.id}/edit`}><button>Edit Item</button></Link>
        </div>
      )}

    </div>
  )

}