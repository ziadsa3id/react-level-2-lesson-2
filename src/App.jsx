import "./App.css";
import "./theme.css";
import { useReducer } from "react";

const initialState = { name: "ziad sa3id", age: "30", theme: "", count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_NAME": {
      return { ...state, name: action.newValue };
    }
    case "CHANGE_AGE": {
      return { ...state, age: action.newValue };
    }
    case "CHANGE_COUNT": {
      return { ...state, count: action.newValue };
    }
    case "CHANGE_THEME": {
      return { ...state, theme: action.newValue };
    }
  
  }
}

function App() {
  const [allData, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className={`App ${allData.theme}`}>
        <button
          onClick={() => {
            dispatch({
              type: "CHANGE_THEME",
              newValue: allData.theme == "" ? "dark" : "",
            });
          }}
          style={{ marginBottom: "40px" }}
        >
          Toggle Mode
        </button>

        <div
          onChange={() => {
            dispatch({
              type: "CHANGE_THEME",
              newValue: allData.theme == "" ? "dark" : "",
            });
          }}
          style={{ marginBottom: "40px" }}
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
              dispatch({ type: "CHANGE_THEME", newValue: "" });
            }}
            style={{ marginRight: "26px" }}
          >
            Light
          </button>
          <button
            onClick={() => {
              dispatch({ type:"CHANGE_THEME", newValue: "dark" });
            }}
            style={{ marginRight: "26px" }}
          >
            Dark
          </button>
          <button
            onClick={() => {
              dispatch({ type: "CHANGE_THEME", newValue: "grey"});
            }}
            style={{ marginRight: "26px" }}
          >
            Grey
          </button>
          <button
            onClick={() => {
              dispatch({ type: "CHANGE_THEME", newValue: "pink"});
            }}
            style={{ marginRight: "26px" }}
          >
            Pink
          </button>
        </div>

        <h1>my name is {allData.name}</h1>

        <button
          onClick={() => {
            dispatch({ type: "CHANGE_NAME", newValue: "zuka" });
          }}
        >
          Change name
        </button>
        <br />
        <br />

        <h2>my age {allData.age}</h2>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_AGE", newValue: "40" });
          }}
        >
          change Age{" "}
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_COUNT", newValue: allData.count + 1 });
          }}
        >
          count {allData.count}{" "}
        </button>
      </div>
    </>
  );
}

export default App;
