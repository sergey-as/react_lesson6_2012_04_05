import './App.css';
import React, {useState, createContext} from "react";

const CounterContext = createContext();
console.log(CounterContext);

const ContextProvider = ({children}) => {
  const [counter, setCounter] = useState(0);

  const incCounter = () => {
    setCounter(counter + 1);
  }
  const decCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <CounterContext.Provider>
      {children}
    </CounterContext.Provider>
  )
}

const Counter = () => {

  return (
    <h3 onClick={() => setCounter(counter + 1)}>Counter: {counter}</h3>
  )
}

const Header = () => {

  return (
    <h1>Header counter:</h1>
  )
}

export default function App() {
  return (
    <>
      <Header/>
      <Counter/>
    </>
  );
}


// React-context
// https://www.youtube.com/watch?v=IB140yvLfh8
// 8:56
