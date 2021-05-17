import './App.css';
import ToyCard from './ToyCard'

function App() {
  return (
    <div className="App">
        <h1>Toy Tales</h1>
        <ul>
          <ToyCard 
            toyName={"Buzz Lightyear"} 
            likes={7} 
            alive={false} 
            arr={[]}
            funcDef={() => {}}
          />
          <ToyCard toyName="Woody" likes={10}></ToyCard>
          <ToyCard toyName="Mr. Potato Head" likes={100}/>
        </ul>
    </div>
  )
}

export default App;
