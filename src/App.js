// JSX with 1 Tag or 1 H1
// JSX with 2 Tag or 2 H1
// RULE::IF USING MORE THAN 1 TAG; IT MUST BE UUNDER PARENT
// RULE::IF One liner, paranthesis are optional
// RULE::IF multi-liner liner, paranthesis Required

function App() {
  return (
    // parent tag
    <> 
      <h1>Hello</h1>
      <h2>parent is required</h2>
    </>
  );
}

export default App;