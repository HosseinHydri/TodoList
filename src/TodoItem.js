import { useState } from "react";

function TodoItem({ task, index, removeTask, editTask }) {
  const [editing, setEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");

  const handleUpdate = () => {
    if (newTaskName !== task) {
      editTask(index, newTaskName);
    }
    setEditing(false);
  };

  return (
    <li>
      {!editing ? (
        <>
          {task}
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => removeTask(index)}>Remove</button>
        </>
      ) : (
        <>
          <input type="text" value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
          <button onClick={() => handleUpdate()}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
