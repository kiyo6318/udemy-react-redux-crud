import React from "react";

function App() {
  const greeting = "Hi!";
  const dom = <h1>{greeting}</h1>;
  return dom;
  // return React.createElement("div", null, "Hello world");
}

export default App;
