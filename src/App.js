import Appbody from "./newpages/Appbody";
import Appfooter from "./newpages/Appfooter";
import AppHeader from "./newpages/Appheader";

//app is user defined tag
function App(){
  return ( <>
 <h1>Hello app function</h1>
<AppHeader/>
<Appbody/>
<Appfooter/>
  </>
  )
}

  

export default App;