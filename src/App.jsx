import "./App.css";
import "./theme.css";

import { useState } from "react";

function App() {
  let [person, setPerson] = useState("ziad sa3id");
  let [age, setAge] = useState("25");

  const changeAge = () => {
    setAge("40");
  };

  const [count, setCount] = useState(0);
  // const sumCount = () => {
  //   setCount + 1
  // }
  const [theme, settheme] = useState("");
  return (
    <>
      <div className={`App ${theme}`}>
        <button
          onClick={() => {
            settheme(theme == "" ? "dark" : "");
          }}
          style={{ marginBottom: "40px" }}
        >
          {" "}
          Toggle Mode
        </button>

        <div style={{ marginBottom: "40px" }}
          onChange={() => {
            settheme(theme == "" ? "dark" : "");
          }}
          className="btn-container"
        >
          <i className="fa fa-sun-o" aria-hidden="true" />
          <label className="switch btn-color-mode-switch">
            <input
              type="checkbox"
              name="color_mode"
              id="color_mode"
              defaultValue={1}
            />
            <label
              htmlFor="color_mode"
              data-on="Dark"
              data-off="Light"
              className="btn-color-mode-switch-inner"
            />
          </label>
          <i className="fa fa-moon-o" aria-hidden="true" />
          
        </div>

        <div>
          <button
            onClick={() => {
              settheme("");
            }}
            style={{ marginRight: "26px" }}
          >
            Light
          </button>
          <button
            onClick={() => {
              settheme("dark");
            }}
            style={{ marginRight: "26px" }}
          >
            Dark
          </button>
          <button
            onClick={() => {
              settheme("grey");
            }}
            style={{ marginRight: "26px" }}
          >
            Grey
          </button>
          <button
            onClick={() => {
              settheme("pink");
            }}
            style={{ marginRight: "26px" }}
          >
            Pink
          </button>
        </div>

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
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count {count}
        </button>
      </div>
    </>
  );
}

export default App;
