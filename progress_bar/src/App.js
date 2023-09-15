import { useState } from "react";
import "./App.css";
import ProgressBar from "./ProgressBar";

const BATCH_LIMIT = 3;

function App() {
  const [barsCount, setBarsCount] = useState(0);
  const [barsFilled, setBarsFilled] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setBarsCount(barsCount + 1)}>Add</button>
      {Array.from({ length: barsCount }).map((item, index) => (
        <ProgressBar
          key={index}
          shouldAnimate={index < barsFilled + BATCH_LIMIT}
          onFill={() => setBarsFilled(barsFilled + 1)}
        />
      ))}
    </div>
  );
}

export default App;
