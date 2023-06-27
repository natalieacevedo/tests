import { useState } from "react";

import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");

  const [disabled, setDisabled] = useState(false);
  function isChecked(e) {
    console.log(e.target.checked);
    setDisabled(e.target.checked);
    console.log(disabled);
    setButtonColor(!disabled ? "gray" : "red");
  }
  function setButton() {
    setButtonColor("blue");
  }

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={setButton}
        disabled={disabled}
      >
        Change to {buttonColor}
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
