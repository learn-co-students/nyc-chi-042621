import './App.css';
import ToyCard from './ToyCard'

// Props is a POJO that contains information from where it's invoked <> (Parent Component sending information down to Child)

function App(props) {

  // console.log("APP", props)

  let sayHelloWhenInvoked = () => {
    console.log("Goodbye")
    console.log("This is a string of App", props)
  }


  return (
    <div className="App">
        <h1>Toy Tales</h1>
        <ul>
          <ToyCard 
            toyName={"Buzz"} 
            likes={2} 
            alive={false}
            chicken={props.chicken}
            sayHelloWhenInvoked={sayHelloWhenInvoked}
          />
          <ToyCard toyName="Woody" likes={19}></ToyCard>
          <ToyCard toyName="Mr. Potato Head" likes={3}/>
        </ul>
    </div>
  )
}

export default App;
