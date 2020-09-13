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
      <User name={"Kiyo"} age={26} />
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      I am {props.name}, and {props.age} years old!
    </div>
  );
};

export default App;
