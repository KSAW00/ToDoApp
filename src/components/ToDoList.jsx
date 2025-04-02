import ToDoItem from "./ToDoItem";

function ToDoList({tasks,setTasks}){
    return(
    <ul>
      {tasks.map((task,index)=>(
        <ToDoItem key = {index} task = {task} setTasks={setTasks} tasks={tasks}/> 
      ))}
    </ul>
    );
  }

export default ToDoList;