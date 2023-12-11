import React from 'react'
import { useState } from 'react'

function Item({item, onDeleteItem, onToggleItem}) {


  function handleDelete() {
    onDeleteItem(item.id)
  }

  function handleToggle () {
    onToggleItem(item.id)
  }

  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={handleToggle}/>
        <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
         {item.quantity}   {item.description}
        </span>
        
        <button onClick={handleDelete}>❌</button>
    </li>
  )
}

export default Item