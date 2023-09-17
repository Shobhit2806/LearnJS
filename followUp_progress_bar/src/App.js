import { useState } from "react";
import "./App.css";
import ProgressBar from "./ProgressBar";

const BATCH_LIMIT = 3;
const INITIAL_STATE = [0];
function App() {
  const [ProgressBars, setProgressBars] = useState(INITIAL_STATE);
  return (
    <div className="App">
      <button onClick={() => setProgressBars(ProgressBars.concat(0))}>
        Add
      </button>
      {ProgressBars.map((progress, index) => (
        <ProgressBar key={index} progress={progress} />
      ))}
    </div>
  );
}

export default App;
