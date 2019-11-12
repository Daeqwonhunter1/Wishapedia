import React, { Component } from 'react'

export default function ItemList(props) {

  const { itemlists } = props
  return (
    <div>

      <h2>ItemList component</h2>

      {itemlists && itemlists.map(itemlist =>
        <div className="itemlist" key={itemlist.id}>
          <Link to={`/itemlists/${itemlist.id}`}><h3>itemlist name: {itemlist.name}</h3></Link>
          <p>description: {itemlist.description}</p>
          <p>occassion: {itemlist.type}</p>
        </div>
      )}

    </div>
  )

}