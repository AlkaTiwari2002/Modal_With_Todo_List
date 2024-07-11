import React, { useState, useEffect, useRef } from 'react';

function Modal({ closeModal, handleAddTask, taskInput, setTaskInput, isEditing }) {
  const [inputValue, setInputValue] = useState(taskInput);
  const inputRef = useRef(null);

  useEffect(() => {
    setInputValue(taskInput);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [taskInput]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setTaskInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(inputValue);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter your task"
            ref={inputRef} 
            required
          />
          <button type="submit">{isEditing ? "Save" : "Add Task"}</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
