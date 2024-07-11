// import './App.css';
// import { Callback } from './Hooks/UseCallback.jsx';

// function App() {
//   return (
//     <div className="App">
//       <Callback/>
//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react';
import Navbar from './Hooks/Navbar.jsx';
import Modal from './Hooks/Modal.jsx';
import Sidebar from './Hooks/Sidebar.jsx';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("All");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddTask = (task) => {
    const newTask = { text: task, status: "Upcoming" };
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditTask = (index) => {
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setTaskInput(tasks[index].text);
    openModal();
  };

  const handleSaveTask = () => {
    if (isEditing) {
      setTasks(tasks.map((task, index) => (index === currentTaskIndex ? { ...task, text: taskInput } : task)));
      setIsEditing(false);
      setCurrentTaskIndex(null);
    } else {
      handleAddTask(taskInput);
    }
    setTaskInput("");
    closeModal();
  };

  const handleUpdateStatus = (index, status) => {
    setTasks(tasks.map((task, i) => (i === index ? { ...task, status } : task)));
  };

  const filteredTasks = tasks.filter(task => filter === "All" || task.status === filter);

  return (
    <div>
      <Navbar openModal={openModal} />
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          handleAddTask={handleSaveTask}
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          isEditing={isEditing}
        />
      )}
      <Sidebar setFilter={setFilter} />
      <div className="tasks">
        <ul>
          {filteredTasks.map((task, index) => (
            <div key={index} className="task-container">
              <li>{task.text}</li>
                <button className="remove" onClick={() => handleRemoveTask(index)} disabled={task.status === 'Completed'}>Remove</button>
                <button className="edit" onClick={() => handleEditTask(index)} disabled={task.status === 'In Progress' || task.status === 'Completed'}>Edit</button>
                <button className="status-button" onClick={() => handleUpdateStatus(index, "Upcoming")} disabled={task.status === 'In Progress' || task.status === 'Completed'}>Upcoming</button>
                <button className="status-button" onClick={() => handleUpdateStatus(index, "In Progress")} disabled={task.status === 'Completed'}>In Progress</button>
                <button className="status-button" onClick={() => handleUpdateStatus(index, "Completed")} disabled={task.status === 'Completed'}>Completed</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
