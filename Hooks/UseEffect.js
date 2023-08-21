import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

// import { AxiosContext } from 'react-axios/lib/components/AxiosProvider'

export default function UseEffect() {
  const[data,setData]=useState();
  const [count,setCount]=useState(0);
  const [name,setName]=useState();

  useEffect( ()=>
  {axios.get("https://jsonplaceholder.typicode.com/users")
   .then(
    (response)=>{
      console.log(response.data)
      setName(response.data[count].name)
    }
    )
  }
  
  ) 
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>Increament</button>
      <h1>{count}</h1>
    </div>
  )
}

