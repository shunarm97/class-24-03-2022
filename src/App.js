import './App.css';
import{useState} from 'react';

function App() {
  
  const [count, setCount] = useState(0)

  const minLimit = () => {
    if  (count > 0) {
      setCount(count - 1)
    }
    return
  }
  const maxLimit = () => {
    // for (let i=0; i<=10; i++)
    // {
    //   setCount(count + 1)
    // }
    // return
    if  (count < 10) {
      setCount(count + 1)
    }
   
    return
 
  }



// console.log(state)
  return (
    <div className="App">
      <header className="App-header">
       {count}
       <button onClick={maxLimit}>aumento</button>
       <button onClick={minLimit}>disminucion</button>
       <button onClick={() => setCount(0)}>disminucion</button>
      </header>
    </div>
  );
}

export default App;
