import './App.css';
import ToyCardFunc from './ToyCardFunc'
import ToyCardClass from './ToyCardClass'

import {useState} from "react"


function App(props) {

  let [arrOfNames, setArrOfNames] = useState(["Andy", "Buzz Lightyear"])
  // first element is always the argument passed into useState
  // second element is always a function definition


  // ["", "", ""] -> [<li/>, <li/>, <li/>]
  let arrayOfComponents = arrOfNames.map((name) => {
      return <ToyCardFunc toyName={name} likes={24} /> 
    })  

  console.log(arrayOfComponents)




  return (
    <div className="App">
        <h1>Toy Tales</h1>
        <button onClick={() => {
          setArrOfNames([])
        }}>Click Me!</button>
        <ul>
          <ToyCardFunc 
            toyName={"Buzz"} 
            likes={2} 
          />
          <ToyCardFunc toyName="Woody" likes={19}></ToyCardFunc>
          <ToyCardFunc toyName="Mr. Potato Head" likes={3}/>
          <ToyCardFunc toyName="Andy" likes={3}/>

        </ul>
          <hr/>
        <ul>
          {arrayOfComponents}
        </ul>
    </div>
  )
}

export default App;
