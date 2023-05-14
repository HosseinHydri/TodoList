import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    if (newTask) {
      setTasks([...tasks, newTask]);
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index, newTaskName) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newTaskName;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList
        tasks={tasks}
        addTask={addTask}
        removeTask={removeTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
