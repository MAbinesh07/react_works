import React, { useContext } from 'react'
import context from './UseContext'

export default function CompB() {
    const user=useContext(context)
    return (
        <div>
           <p>{user}</p> 
        </div>
    )
}
