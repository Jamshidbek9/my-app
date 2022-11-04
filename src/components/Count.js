import {useState} from "react"

export default function Count(){
  const [count , setcount] = useState(0)
    function Incr(){
        setcount(prev => prev + 1)
      }
      function Decr(){
        setcount(prev => prev - 1)
      }
    return(
        <>
        <h1>Count : {count}</h1>
      <button onClick={Incr} className="btn btn-success btn-sm me-3">Incr</button>
      <button onClick={Decr} className="btn btn-danger btn-sm">Decr</button>
      <hr/>
        </>
    )
}