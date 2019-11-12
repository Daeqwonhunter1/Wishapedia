import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function ItemList(props) {

  const { items } = props
  return (
    <div>

      <h2>ItemList component</h2>

      {items && items.map(item =>
        <div className="item" key={item.id}>
          {/* <Link to={`/items/${item.id}`}><h3>itemlist name: {item.name}</h3></Link> */}
          <p>name: {item.name}</p>
          <p>image_url: {item.image_url}</p>
          <p>url: {item.url}</p>
          <p>price: {item.price}</p>
          <p>comments: {item.commensts}</p>
        </div>
      )}

    </div>
  )

}