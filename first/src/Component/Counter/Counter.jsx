import React, { useState } from 'react'
import './Counter.css';

function Counter() {
    const [num,Counter]=useState(0)
  return (
    <div className='container'>
        <h1>{num}</h1>
        <button onClick={() => Counter(num + 1)} className='button'>Add</button>
        <button onClick={() => Counter(num - 1)} className='button'>remove</button>
        <button onClick={() => Counter(0)} className='button'>Reset</button>
    </div>
  )
}

export default Counter;