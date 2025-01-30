import { useState } from 'react'


function App() {
  let [count, setCount] = useState(0)
  const addval= () =>{
    setCount(count+1);
  }
  const removval= () =>{
    if(count>0)
    {
      setCount(count-1);
    }
    else{
      setCount(0);
    }
    
  }
  return (
    <>
    <h1>kenil kathiriya</h1>
    <>add value {count}</>
    <button onClick={addval}> click me</button>
    <br></br>
    <button onClick={removval}> click me for remove</button>
    </>

  )
}

export default App
