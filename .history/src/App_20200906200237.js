import React from "react";

function App() {
  return (
    <input
      type="text"
      onChange={() => {
        console.log("I am clicked");
      }}
    />
  );
}

export default App;
