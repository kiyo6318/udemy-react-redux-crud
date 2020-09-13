import React from "react";

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//     </React.Fragment>
//     // <input
//     //   type="text"
//     //   onChange={() => {
//     //     console.log("I am clicked");
//     //   }}
//     // />
//   );
// }

const App = () => {
  return (
    <div>
      <User name={"Kiyo"} />
    </div>
  );
};

const User = (props) => {
  return <div>I am {props}</div>;
};

export default App;
