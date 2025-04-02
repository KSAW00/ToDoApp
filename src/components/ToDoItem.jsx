function ToDoItem({ task, tasks, setTasks }) {
  const toggleComplete = () => {
    const updatedTasks = tasks.map((t) =>
      t === task ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
      <button onClick={toggleComplete}>✔</button>
      <button onClick={() => handleEdit(task,tasks,setTasks)}>✏</button>
      <button onClick={() => handleDelete(task,tasks,setTasks)}>❌</button>
    </li>
  );
}

const handleDelete = (task,tasks,setTasks) => {
  setTasks(tasks.filter((t) => t !== task));
};

const handleEdit = (task,tasks,setTasks) => {
  const newText = prompt("Edit task:", task.text);
  if (newText) {
    setTasks(
      tasks.map((t) => (t === task ? { ...t, text: newText } : t))
    );
  }
};

export default ToDoItem;