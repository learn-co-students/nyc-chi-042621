import './App.css';
import ToyCardFunc from './ToyCardFunc'
import ToyCardClass from './ToyCardClass'

function App(props) {

  return (
    <div className="App">
        <h1>Toy Tales</h1>
        <ul>
          <ToyCardFunc 
            toyName={"Buzz"} 
            likes={2} 
          />
          <ToyCardFunc toyName="Woody" likes={19}></ToyCardFunc>
          <ToyCardFunc toyName="Mr. Potato Head" likes={3}/>
        </ul>
          <hr/>
        <ul>
          <ToyCardClass toyName="Jessie" likes={8}/>
        </ul>
    </div>
  )
}

export default App;
