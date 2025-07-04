import React from "react";
import "./DashboardHeader.css";

// PUBLIC_INTERFACE
export default function DashboardHeader() {
  /**
   * Dashboard top header bar with title, notification bell, org switcher, and user avatar.
   * Modern, minimal style matching design notes.
   */
  return (
    <header className="dashboard-header">
      <div className="header-title">Dashboard</div>
      <div className="header-controls">
        <button className="header-icon-btn" aria-label="View notifications">
          <BellIcon />
        </button>
        <div className="header-org-switch">
          <span>ACME Inc.</span>
          <span className="org-caret">&#9662;</span>
        </div>
        <button className="header-avatar-btn" aria-label="Profile menu">
          <img
            src="https://randomuser.me/api/portraits/men/98.jpg"
            alt="User Avatar"
            className="header-avatar"
            width={40}
            height={40}
          />
        </button>
      </div>
    </header>
  );
}

function BellIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M17 17v-6a5 5 0 0 0-10 0v6l-1 2h12l-1-2z" />
      <circle cx="12" cy="21" r="1" />
    </svg>
  );
}
