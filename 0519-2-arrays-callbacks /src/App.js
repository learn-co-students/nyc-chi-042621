import './App.css';
import ToyCardFunc from './ToyCardFunc'
import ToyCardClass from './ToyCardClass'

import React, {useState} from 'react'

function App(props) {
 
  let [names, setNames] = useState(["John", "Granny", "Ratatouille"])
    // First elmement is your state (The argument)
    // Second element is your function definition
    
  // ["", "", ""] -> [<li/>, <li/>, <li/>]
  let arrOfComponents = names.map((name) => {
    return <ToyCardFunc toyName={name} likes={19}/>
  })
  
    
  let [counter, setCounter] = useState(100)

  return (
    <div className="App">
        <h1>Toy Tales</h1>
        <h2>Count: {counter}</h2>

        <button>Increase</button>
        <button>Decrease</button>

        <ul>
          <ToyCardFunc 
            toyName={"Buzz"} 
            likes={2} 
          />
          <ToyCardFunc toyName="Woody" likes={19}></ToyCardFunc>
          <ToyCardFunc toyName="Mr. Potato Head" likes={3}/>
          <ToyCardFunc toyName="Grandma" likes={300}/>


        </ul>
          <hr/>
        <ul>
          <button onClick={() => {
            console.log("You have donated toys")
            setNames(["Buzz Lightyear", "Thorax"])
          }}>Donate All Toys</button>
          {arrOfComponents}
        </ul>
    </div>
  )
}

export default App;
