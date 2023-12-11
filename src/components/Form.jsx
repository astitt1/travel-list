import React from "react";
import {useState} from 'react'

function Form({onAddItems}) {

  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  

  function handleSubmit(e) {
    e.preventDefault();
      // console.log(e)
    if(!description) return;

    const newItem = {
      description,
      quantity, 
      packed: false,
      id: Date.now()
    }

    console.log(newItem)

    onAddItems(newItem)

    setDescription('')
    setQuantity(1)
  }

  function handleChange(e) {
    // console.log(e.target.value)
    setDescription(e.target.value)
  }

  function onQuantityChange(e) {
    console.log(e.target.value)
    setQuantity(Number(e.target.value))
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={onQuantityChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type='text' placeholder='item...' value={description} onChange={handleChange}/>
      <button>Add</button>
    </form>
  );
}

export default Form;
