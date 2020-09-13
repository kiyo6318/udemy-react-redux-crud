import React from "react";
import PropTypes from "prop-types";

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
  const profiles = [
    {
      name: "Kiyo",
      age: 26,
    },
    {
      name: "Kimiko",
      age: 65,
    },
    {
      name: "Takahiko",
      age: 67,
    },
    {
      name: 1,
    },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
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

User.propTypes = {
  name: PropTypes.string,
};

export default App;
