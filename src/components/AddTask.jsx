import { useState } from "react";

function AddTask({ setTasks }) {
    const [input, setInput] = useState("");
  
    const handleAdd = () => {
      if (input.trim()) {
        setTasks((prevTasks) => [...prevTasks, { text: input, completed: false }]);
        setInput(""); }
    };
  
    return (
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
    );
  }

export default AddTask;
  