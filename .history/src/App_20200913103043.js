import React from "react";
import { isCompositeComponent } from "react-dom/test-utils";

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

const App = () => (<Counter></Counter>)

class Counter extends Component = (props) => {
  return (
    <div>
      I am {props.name}, and {props.age} years old!
    </div>
  );
};

export default App;
