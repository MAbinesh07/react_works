import { useContext } from "react"
import userContext from "./UseContext"

function Comp2() {
    const values=useContext(userContext)
    return (
        <div>
            <h1>Component Two</h1>
            <h1>{values}</h1>
        </div>
    )
}

export default Comp2