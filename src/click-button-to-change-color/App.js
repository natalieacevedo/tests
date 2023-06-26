import { useState } from "react";

import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [disabled, setDisabled] = useState(false);
  function isChecked(e) {
    console.log(e.target.checked);
    setDisabled(e.target.checked);
  }

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        onClick={isChecked}
        type="checkbox"
        id="disable-button-checkbox"
      ></input>
    </div>
  );
}

export default App;
