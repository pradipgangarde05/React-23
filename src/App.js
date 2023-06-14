//app is user defined tag
function App(){
  return ( <>
 <h1>Hello app function</h1>
<Header/>
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
  
function Header(){
return(
  <>
  <h1>Inside header tag</h1>
  </>
)
}

export default App;