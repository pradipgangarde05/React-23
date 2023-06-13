import { getRoles } from "@testing-library/react";
import "./App.css";

function App(){
  let str = { background: "green", color: "white" };
  let pi=3.1144;
  let active=true;
  let inactive=false;
  let user = { id: 1, name:"pradip" };

  return(
    <>
         <>
      <h1 className="beautiful">Hello World</h1>

      <h1 style={{ color: "red" }}>Hello</h1>
    </>

       <h1 style={str}>"hello react"</h1>

      <h2 style={{background:"blue" ,color:"white" }} > hiii nikhil </h2>

      <h1 style={{ backgroundColor: "red", color: "black", padding: "8px" }}>
        hello World
      </h1>
    </>
  )
}
export default App;
