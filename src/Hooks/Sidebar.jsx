import React, { useState, useEffect } from 'react';
import './Sidebar.css';

function Sidebar({ setFilter }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className="sidebar">
      <h2>Digital Watch</h2>
      <div className="clock">{formatAMPM(currentTime)}</div>
      <button className="sidebar-button" onClick={() => setFilter("All")}>All Tasks</button>
      <button className="sidebar-button" onClick={() => setFilter("Upcoming")}>Upcoming Tasks</button>
      <button className="sidebar-button" onClick={() => setFilter("In Progress")}>In Progress</button>
      <button className="sidebar-button" onClick={() => setFilter("Completed")}>Completed Tasks</button>
    </div>
  );
}

export default Sidebar;
