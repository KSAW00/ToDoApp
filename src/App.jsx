import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import AddTask from "./components/AddTask";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />
      <AddTask setTasks={setTasks} />
      <ToDoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
