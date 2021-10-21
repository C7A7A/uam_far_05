import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("click me!");
  const [label, setLabel] = useState("Label to change");

  return (
    <div>
      <div>
        <button onClick={() => setValue("foo")}> {value} </button>
      </div>
      <div>
        <label>
          {" "}
          {label}
          <input
            type="text"
            onChange={(event) => setLabel(event.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
