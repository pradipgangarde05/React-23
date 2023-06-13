// JSX with 1 Tag or 1 H1
// JSX with 2 Tag or 2 H1
// RULE::IF USING MORE THAN 1 TAG; IT MUST BE UUNDER PARENT
// RULE::IF One liner, paranthesis are optional
// RULE::IF multi-liner liner, paranthesis Required

function App(){
  let var1=<h1>hello in  timepass react app  </h1>
  let var2=<h1>hello in  timepass react project  </h1>
  
return ( 
  <>
  <h1>{(false?var1:var2)}  </h1>
  
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur nulla est illo perferendis accusamus, corrupti voluptates praesentium numquam nemo fugiat.
  </>
) ;
}

export default App;