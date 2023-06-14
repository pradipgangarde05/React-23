import { useState } from "react";
import Appbody from "./newpages/Appbody";
import Appfooter from "./newpages/Appfooter";
import AppHeader from "./newpages/Appheader";
import CounterApp from "./newpages/counterApp";

//app is user defined tag
function App(){
  return ( <>
 <h1>Hello app function</h1>
        < CounterApp/>
  </>
  )
}

export default App;
