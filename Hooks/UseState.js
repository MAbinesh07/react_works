import { useState } from "react";

export default function UseState() {
    const [count,setCount]= useState(0);
    const [name,userName]= useState("")
    return (
        <div>
              <input onChange={(e)=>{userName(e.target.value)}}/>
              <button onClick={()=>{setCount(count+1)}}>Click</button> 
              <h1>increament(count)</h1>
              <h1>(name)</h1>
        </div>
    )
};
