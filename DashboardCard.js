
import React from 'react';
import './DashboardCard.css';

function DashboardCard({ title, count, power }) {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <p>Count: {count}</p>
      <p>Power Consumption: {power}</p>
    </div>
  );
}

export default DashboardCard;
