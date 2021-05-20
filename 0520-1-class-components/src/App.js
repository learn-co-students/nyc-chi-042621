import './App.css';
import ToyCardFunc from './ToyCardFunc'
import ToyCardClass from './ToyCardClass'

import {useState} from "react"

function App(props) {
  let [arrOfNames, setArrOfNames] = useState(["Andy", "Buzz Lightyear"])

  let arrayOfComponents = arrOfNames.map((name) => {
      return <ToyCardFunc key={name} toyName={name} likes={24} /> 
    })  

  return (
    <div className="App">
        <h1>Toy Tales</h1>
        <ul>
          {arrayOfComponents}
        </ul>
    </div>
  )
}

export default App;
