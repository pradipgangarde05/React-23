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
        <div className="alert alert-success fs-3">
        <h2>Insiside Appbody tag</h2>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        rem corrupti ipsam, necessitatibus, ut tempore nisi aspernatur cumque
        blanditiis quae quia. Corrupti, in ducimus. Ullam suscipit inventore
        quam ex non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus tempora eum cupiditate. Nobis id, facere iure debitis eum a
        at, nulla placeat, tenetur tempore ratione adipisci deleniti alias
        aspernatur voluptatem! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis rem corrupti ipsam, necessitatibus, ut
        tempore nisi aspernatur cumque blanditiis quae quia. Corrupti, in
        ducimus. Ullam suscipit inventore quam ex non. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Voluptatibus tempora eum cupiditate.
        Nobis id, facere iure debitis eum a at, nulla placeat, tenetur tempore
        ratione adipisci deleniti alias aspernatur voluptatem!
      </div>
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