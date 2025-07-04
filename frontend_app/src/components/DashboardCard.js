import React from "react";
import "./DashboardCard.css";

// PUBLIC_INTERFACE
export default function DashboardCard({ title, headerAction, children, style }) {
  /**
   * Dashboard Card container for main content grid.
   * - title: card title (string)
   * - headerAction: optional React node (e.g., link or button)
   * - children: card inner content
   */
  return (
    <div className="dashboard-card" style={style}>
      {(title || headerAction) && (
        <div className="dashboard-card-header">
          <span className="dashboard-card-title">{title}</span>
          <span className="dashboard-card-action">{headerAction}</span>
        </div>
      )}
      <div className="dashboard-card-content">{children}</div>
    </div>
  );
}
