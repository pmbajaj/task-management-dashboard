import React from "react";

const SupportTrackerCard = () => {
  return (
    <div className="card support-card">
      <h3>Support Tracker</h3>
      <p className="tracker-percentage">85%</p>
      <span>Completed Tasks</span>
      <div className="tracker-buttons">
        <button className="btn-primary">New Tickets</button>
        <button className="btn-secondary">View All</button>
      </div>
    </div>
  );
};

export default SupportTrackerCard;
