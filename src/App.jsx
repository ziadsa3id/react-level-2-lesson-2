import "./App.css";
import { useState } from "react";

function App() {
  let [person, setPerson] = useState("ziad sa3id");
  let [age, setAge] = useState("25");

  const changeAge = () => {
    setAge("30");
  };

  const [count, setCount] = useState(0);
  // const sumCount = () => {
  //   setCount + 1
  // }
  return (
    <>
      <div>
        <h1>my name is {person}</h1>
        {/* <input
          type="text" id="namea"
          onClick={() => {
            var data = namea.value;
          }}
        /> */}
        <button
          onClick={() => {
            setPerson("zuka");
          }}
        >
          Change name{" "}
        </button>
        <br />
        <br />

        <h2>my age {age}</h2>
        <button onClick={changeAge}>change Age</button>
        <br />
        <br />
        <button onClick={() => { setCount(count+1) }}>count {count}</button>
      </div>
    </>
  );
}

export default App;
