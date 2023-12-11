import React from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem }) {

  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
        <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
        ))}
      </ul> 
    </div>
  );
}

export default PackingList;
