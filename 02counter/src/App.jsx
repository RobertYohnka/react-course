import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    //prevCounter is the previous value of the counter.  If only Counter is used, it will always be the initial value of the counter.
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course with Hitesh {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button
        onClick={addValue}
      >Increment</button> {" "}
      <button
        onClick={removeValue}
      >Decrement</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
