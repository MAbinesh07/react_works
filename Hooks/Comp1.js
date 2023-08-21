import React from 'react'
import { useState } from 'react'
import userContext from './Usecontext';
import Comp2 from './Comp2';
function Comp1() {
    const [count,setcount]=useState(0)
    return (
        <userContext.Provider value={count}>
        <div>
            <h1>Component 1</h1>
            <Comp2/>
            <button onClick={()=>{setcount(count+1)}}>count</button>
        </div>
        </userContext.Provider>
    )
}

export default Comp1