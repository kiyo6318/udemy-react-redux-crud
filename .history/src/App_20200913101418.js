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
  ];
  return (
    <div>
      {profiles.map((profile) => {
        return <User name={profile.name} age={profile.age} />;
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

export default App;
