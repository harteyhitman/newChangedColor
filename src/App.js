import React, {useState} from "react"
import Tweet from "./Tweet"



function App() {
  const [isRed, setRed] = useState(false)
  const [count, setCount] = useState(0)

  const Increment = () => {
    setCount(count + 1)
    setRed(!isRed);
  }

  // const [users, setUser] = useState([
  //   {name: "Ed", message: "Hello dear"},
  //   {name: "John", message: "Whats going on"},
  //   {name: "Ed", message: "Im coming Home"}
  // ])

  return(
    <div className="app">
      <h1 className={isRed ? "red": "" }>Change my color</ h1>
         <button onClick={Increment}>Increment</button>
         <h1>{count}</h1>
    <Tweet name="Oyegoke Azeez" desc="I keep learning react" likes="no: 125"/>
    </div>
  )
  
}

export default App