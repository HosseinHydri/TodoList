import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, addTask, removeTask, editTask }) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem task={task} key={index} index={index} removeTask={removeTask} editTask={editTask} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
