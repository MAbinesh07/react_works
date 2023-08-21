import React, { useState } from 'react'
import context from './UseContext';

export default function CompA() {
    const [count, setCount]=useState(0);
    return (
        <context.Provider value={count}>
            <button onClick={()=>{setCount(count+1)}}>Click</button> 
            <h1>{count}</h1>
        </context.Provider>
    )
}
