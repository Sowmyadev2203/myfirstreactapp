import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null); 
  const [editedTask, setEditedTask] = useState(""); 

  
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask(""); 
    }
  };

 
  const startEditing = (id, currentText) => {
    setEditingTaskId(id);
    setEditedTask(currentText);
  };

  const editTask = () => {
    if (editedTask.trim()) {
      setTasks(tasks.map(t => t.id === editingTaskId ? { ...t, text: editedTask } : t));
      setEditingTaskId(null);
      setEditedTask(""); 
    }
  };

 
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

     
      {!editingTaskId ? (
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            placeholder="Edit task"
          />
          <button onClick={editTask}>Save Changes</button>
        </div>
      )}

      
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => startEditing(task.id, task.text)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
