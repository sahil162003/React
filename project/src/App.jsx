import { useState } from "react";

function App() {

   const [counter,setCounter] =useState(15)
  //let counter =15
  const addValue=()=>{
    console.log("value added",Math.random());
    
   // counter = counter + 1;
   if (counter<20) {
    setCounter(counter+1)

   }

  console.log("counter value",counter);
  }
  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    
   // counter = counter + 1;


  console.log("counter value",counter);
  }
  return (
    <>
        <h1>chai aur react</h1>
        <h2>counter value :{counter}</h2>
        <button onClick={addValue}>
          add value {counter}</button>
        <br />
        <button onClick={removeValue}>remove value{counter}</button>
    </>
  )
}

export default App
