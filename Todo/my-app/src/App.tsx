import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  
  return (
    <div className="App">
      <span className="heading">Taskify</span>
     
    </div>
  );
};

export default App;