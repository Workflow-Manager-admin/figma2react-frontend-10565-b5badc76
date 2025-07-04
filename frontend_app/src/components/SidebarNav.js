import React from "react";
import "./SidebarNav.css";

// PUBLIC_INTERFACE
export default function SidebarNav({ active = "Dashboard", onNavigate }) {
  /**
   * This is the main sidebar navigation menu for the dashboard UI.
   * Props:
   *  - active: string, the name of the active navigation item.
   *  - onNavigate: function, called with the nav name when a nav item is clicked.
   *
   * Usage:
   * <SidebarNav active="Orders" onNavigate={handleNavigate} />
   */

  const menu = [
    { icon: <DashboardIcon />, name: "Dashboard" },
    { icon: <OrdersIcon />, name: "Orders" },
    { icon: <CustomersIcon />, name: "Customers" },
    { icon: <InventoryIcon />, name: "Inventory" },
    { icon: <ReportsIcon />, name: "Reports" },
    { icon: <SettingsIcon />, name: "Settings" },
  ];

  return (
    <aside className="sidebar-nav" role="navigation" aria-label="Main menu">
      <div className="sidebar-logo">
        <span className="logo-icon" aria-label="Logo">
          <span role="img" aria-label="App Logo">🍽️</span>
        </span>
      </div>
      <nav>
        <ul className="sidebar-menu">
          {menu.map((item) => (
            <li
              key={item.name}
              className={`sidebar-menu-item ${
                active === item.name ? "active" : ""
              }`}
              tabIndex="0"
              aria-current={active === item.name ? "page" : undefined}
              onClick={() => onNavigate && onNavigate(item.name)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && onNavigate) onNavigate(item.name);
              }}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

/** Outlined SVG icons for sidebar nav -- minimal, consistent  */
function DashboardIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="#4F5DCA" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="4" y="4" width="7" height="7" rx="2"/>
      <rect x="13" y="4" width="7" height="4" rx="2"/>
      <rect x="13" y="10" width="7" height="10" rx="2"/>
      <rect x="4" y="13" width="7" height="7" rx="2"/>
    </svg>
  );
}
function OrdersIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="#4F5DCA" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="4" y="7" width="16" height="13" rx="2"/>
      <path d="M8 7V5a4 4 0 0 1 8 0v2" />
    </svg>
  );
}
function CustomersIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="#4F5DCA" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4"/>
      <path d="M2 20c0-3.313 4.03-6 10-6s10 2.687 10 6" />
    </svg>
  );
}
function InventoryIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="#4F5DCA" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="6" width="7" height="13" rx="2"/>
      <rect x="14" y="6" width="7" height="13" rx="2"/>
      <rect x="9" y="2" width="6" height="4" rx="2"/>
    </svg>
  );
}
function ReportsIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="#4F5DCA" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="4"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  );
}
function SettingsIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="#4F5DCA" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a1.86 1.86 0 0 1-2.63 2.63l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a1.86 1.86 0 0 1-2.63-2.63l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-.33-1.82l-.06-.06A1.86 1.86 0 0 1 10.84 9.5l.06.06A1.65 1.65 0 0 0 15 8.6a1.65 1.65 0 0 0 1.82-.33l.06-.06A1.86 1.86 0 0 1 17.4 8.6a1.65 1.65 0 0 0 .33 1.82l.06.06A1.86 1.86 0 0 1 19.4 15z"/>
    </svg>
  );
}
