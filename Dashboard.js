import React from 'react';
import DashboardCard from './DashboardCard';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="cards">
        <DashboardCard title="Fans" count="27" power="270" />
        <DashboardCard title="Light" count="65" power="876" />
        <DashboardCard title="Refrigerator" count="4" power="0" />
        <DashboardCard title="Air Condition" count="852" power="65" />
      </div>
      <div className="charts">
        
        <div className="chart">Average Power Consumption (Chart)</div>
        <div className="chart">Current Power Consumption (Chart)</div>
      </div>
    </div>
  );
}

export default Dashboard;
