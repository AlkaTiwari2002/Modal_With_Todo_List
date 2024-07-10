import React, { useState } from 'react';
import '../App.css'

function Modal({ closeModal, handleAddTask }) {
  const [task, setTask] = useState('');

  const handleChange = (e) => setTask(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      handleAddTask(task);
      setTask('');
      closeModal();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Add Your Task</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={task} onChange={handleChange} placeholder="Enter task"/>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
