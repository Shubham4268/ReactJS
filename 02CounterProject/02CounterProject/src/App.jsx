import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let Counter = 5;

  let [Counter, setCounter] = useState(5)

  function addCount(){
    if(Counter<15){
      setCounter(Counter+1);
    }
    
  }
  function removeCount(){
    if (Counter>0) {
      setCounter(Counter-1);
    }
    
  }
  return(
    <>
      <h1>Shubham Joshi</h1>
      <h3>Hooks in React</h3>
      <h4>Counter : {Counter}</h4>

      <button onClick={addCount} id='b1'>Increase</button>
      <button onClick={removeCount} id='b2'>Decrease</button>

      <p>Hooks: React allows you to change javascript variables, but to update those variables in User interface you need to use 
special methods provided by react that are called hooks. Example in Counterproject App.jsx.</p>
      <p>(In React, hooks are special functions that allow you to manage state and other React features in functional components. They enable you to update state variables, triggering UI updates when those variables change. For example, in the Counterproject App.jsx, hooks are utilized to manage the state of the counter component.)
Hooks return an array of size 2. first is variable, second is method.</p>
      <p>When hooks are used to update any value, they react for whole page and update everywhere on the webpage.</p>
      <p>There are several built-in hooks provided by React, including:
        <ul>
          <li>useState: Allows functional components to have local state.</li>
          <li>useContext: Accesses the context of a React context provider.</li>
          <li>useReducer: Alternative to useState, for managing more complex state logic.</li>
          <li>useRef: Provides a way to access the DOM or React elements directly.</li>
          <li>useMemo and useCallback: Memoizes values and functions to prevent unnecessary re-renders.</li>
          <li>useLayoutEffect: Similar to useEffect, but runs synchronously after all DOM mutations.</li>
          <li>useDebugValue: Adds debug information to custom hooks.</li>
        </ul>
      </p>
    </>
  )
  
}

export default App
