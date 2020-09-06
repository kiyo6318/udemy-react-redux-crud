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
      <cat />
      <cat />
    </div>
  );
};

const Cat = () => {
  return <div>ニャー</div>;
};

export default App;
