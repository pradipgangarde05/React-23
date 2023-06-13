function App(){
  let str=`heello guys welcome in react`;
  let pi=3.1144;
  let active=true;
  let inactive=false;
  let user = { id: 1, name:"pradip" };

  return(
    <>
      <h1>hello react</h1>
      <h1>str</h1>
      <h1>PI {str}</h1>
      {active && <h1>hii nikhil</h1> }     
      {inactive && <h1>hii nikhil</h1> }

         {active ? <h1>Good Morning</h1> : <h1>Good Night</h1>}   
         <h1>
          id:{user.id}Name:{user.name};
         </h1>

    </>
  )
}
export default App;