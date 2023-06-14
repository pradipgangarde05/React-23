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
function Appfooter(){
  return(
    <>
    <h2>Insiside footer tag</h2>
    </>
  )
  }

function Appbody(){
  return(
    <>
    <h2>Insiside Appbody tag</h2>
    </>
  )
  }
  
function AppHeader(){
return(
  <>
   <div className="row bg-success text-light p-3 fs-1">
      <div className="col">Home</div>
      <div className="col">Project</div>
      <div className="col">AboutUs</div>
    </div>
  
  </>
)
}

export default App;