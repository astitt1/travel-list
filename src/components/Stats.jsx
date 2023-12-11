import React from 'react'

function Stats({items}) {

  const numItems = items.length;

  const numPacked = items.filter(items=> items.packed).length
  console.log(numPacked)

  const percentage = Math.round((numPacked / numItems) * 100)
 
  return (
    <footer className='stats'>
      {percentage === 100 ? 'You have everything packed! Ready to Go ✈' : 
       `💼You have ${numItems} items on your list, and you already have packed ${numPacked}  (${percentage} %)`}
     
    </footer>
  )
}

export default Stats