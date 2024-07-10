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
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navbar openModal={openModal} />
      {isModalOpen && <Modal closeModal={closeModal} handleAddTask={handleAddTask} />}
      <div className="tasks">
        <ul>
          {tasks.map((task, index) => (
            <div key={index} className="task-container">
              <li>{task}</li>
              <button className="remove" onClick={() => handleRemoveTask(index)}>Remove</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
