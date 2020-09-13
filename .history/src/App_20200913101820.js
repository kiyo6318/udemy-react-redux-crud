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
      name: "Jon Doe",
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

User.defaultProps = {
  age: 1,
};

export default App;
