import React, { useEffect, useState } from "react";
import "./App.css";
const ProgressBar = ({shouldAnimate,onFill}) => {
  const [startAnimate, setStartAnimate] = useState(false);
  useEffect(() => {
    if(!shouldAnimate) return;
    setStartAnimate(true);
  }, [shouldAnimate]);
  return (
    <div>
      <div className="bar">
        <div className={`content ${startAnimate ? "fill" : ""}`} onTransitionEnd={onFill}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
