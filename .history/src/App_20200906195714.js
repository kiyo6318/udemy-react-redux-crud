import React from "react";

function App() {
  const greeting = "Hi! Tom!";
  const dom = <h1 className="foo">{greeting}</h1>;
  return dom;
  // return React.createElement("div", null, "Hello world");
}

export default App;
