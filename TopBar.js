import React from 'react';
import './TopBar.css';

function TopBar() {
  return (
    <div className="topbar">
      <input type="text" placeholder="Search here..." />
      <div className="profile">John Doe</div>
    </div>
  );
}

export default TopBar;
