import { useState } from "react";
function CounterApp(){
    let [counter,setCounter] = useState(1);
    let id = 100;
    let pi = 3.14;
    let str = "Hello World";
    let active = true;
  
   
  //Member Function
    let likeMeAction = () => {
      counter  = counter + 1;
      console.log("I'am button click",counter);
      setCounter(counter);
    };
    let dislikeMeAction = () => {};
  
    return(
    <>
   <h1>{counter}</h1>
    <input type="button" value="Like Me" onClick={likeMeAction} />
    </>
    );
  }
export default  CounterApp;  
  