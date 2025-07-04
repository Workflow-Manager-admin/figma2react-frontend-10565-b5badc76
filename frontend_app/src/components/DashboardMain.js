import React from "react";
import DashboardCard from "./DashboardCard";
import "./DashboardMain.css";

// PUBLIC_INTERFACE
export default function DashboardMain() {
  /**
   * Main dashboard content grid with all cards/views.
   * Uses responsive grid per design notes.
   */
  return (
    <div className="dashboard-main-grid">
      {/* Bank Balance Card */}
      <DashboardCard
        title="Bank Balance"
        style={{ gridArea: "bank" }}
      >
        <div className="bank-balance-value">
          $24,566<span className="bank-currency">.88</span>
        </div>
        <div className="bank-growth-indicator">
          <span className="growth-icon">&#9650;</span>
          <span className="growth-green">+5.42%</span>
          <span className="growth-muted">from last week</span>
        </div>
        <div className="bank-bar-graph">
          {[22,14,28,21,27,19,30].map((h,i) => (
            <div className="bar" style={{height: h*1.25+18}} key={i}/>
          ))}
        </div>
        <div className="bank-label muted">Last 7 days</div>
      </DashboardCard>

      {/* Order Time Donut Card */}
      <DashboardCard
        title="Order Time"
        headerAction={<a className="view-report" href="#">View Report</a>}
        style={{ gridArea: "orderTime" }}
      >
        <div className="order-donut-row">
          <DonutChart />
          <DonutLegend />
        </div>
      </DashboardCard>

      {/* Ratings Card */}
      <DashboardCard
        title="Your Rating"
        style={{ gridArea: "rating" }}
      >
        <div className="stat-circles">
          <StatCircle percent={92} color="#4f6afb" label="Meetings" />
          <StatCircle percent={85} color="#ff9838" label="Positive Reviews" />
        </div>
      </DashboardCard>

      {/* Most Ordered Food Card */}
      <DashboardCard
        title="Most Ordered Food"
        style={{ gridArea: "food" }}
      >
        <FoodList />
      </DashboardCard>

      {/* Trends Card */}
      <DashboardCard
        title="Order Trends"
        headerAction={<a className="view-report" href="#">View Report</a>}
        style={{ gridArea: "trends" }}
      >
        <div className="trends-main-value">2,168</div>
        <div className="trends-label">Order</div>
        <LineGraph />
      </DashboardCard>
    </div>
  );
}

function DonutChart() {
  // SVG Donut (demo; not interactive)
  return (
    <svg width="92" height="92" viewBox="0 0 92 92" className="order-donut">
      {/* base */}
      <circle cx="46" cy="46" r="40" fill="#eef3fc"/>
      {/* Afternoon fill (blue) */}
      <circle cx="46" cy="46" r="40"
        fill="none"
        stroke="#4f6afb"
        strokeWidth="12"
        strokeDasharray={`${0.34*251} 251`}
        strokeDashoffset="0"
        transform="rotate(-90 46 46)"
      />
      {/* Evening fill (orange) */}
      <circle cx="46" cy="46" r="40"
        fill="none"
        stroke="#ff9838"
        strokeWidth="12"
        strokeDasharray={`${0.23*251} 251`}
        strokeDashoffset={-0.34*251}
        transform="rotate(-90 46 46)"
      />
      {/* Night fill (gray) */}
      <circle cx="46" cy="46" r="40"
        fill="none"
        stroke="#adb5bd"
        strokeWidth="12"
        strokeDasharray={`${0.43*251} 251`}
        strokeDashoffset={-(0.34+0.23)*251}
        transform="rotate(-90 46 46)"
      />
    </svg>
  );
}

function DonutLegend() {
  return (
    <div className="donut-legend">
      {[
        {label: "Afternoon", color: "#4f6afb", perc: "34%"},
        {label: "Evening", color: "#ff9838", perc: "23%"},
        {label: "Night", color: "#adb5bd", perc: "43%"},
      ].map(({label, color, perc}) => (
        <div className="donut-legend-row" key={label}>
          <span className="dot" style={{background: color}}/>
          <span className="legend-label">{label}</span>
          <span className="legend-perc">{perc}</span>
        </div>
      ))}
    </div>
  );
}

function StatCircle({ percent, color, label }) {
  // SVG circular progress
  const r = 34, c = 2*Math.PI*r, pct = percent || 0;
  return (
    <div className="stat-circle">
      <svg width="76" height="76" viewBox="0 0 76 76">
        <circle cx="38" cy="38" r="34" fill="#f5f6fa" />
        <circle
          cx="38"
          cy="38"
          r="34"
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeDasharray={`${(pct/100)*c} ${c}`}
          strokeDashoffset="0"
          transform="rotate(-90 38 38)"
          style={{ transition: "stroke-dasharray 0.6s" }}
        />
      </svg>
      <div className="stat-percent" style={{ color }}>{percent}%</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function FoodList() {
  // Placeholder foods; normally dynamic
  const foods = [
    { img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?h=60&w=60&fit=crop", name: "Veggie Pizza", qty: 54 },
    { img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?h=60&w=60&fit=crop", name: "Choco Cake", qty: 37 },
    { img: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?h=60&w=60&fit=crop", name: "Pasta Bowl", qty: 29 },
    { img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?h=60&w=60&fit=crop", name: "Burger", qty: 23 },
  ];
  return (
    <ul className="food-list">
      {foods.map((f) => (
        <li className="food-list-item" key={f.name}>
          <img src={f.img} alt={f.name} className="food-avatar" width={40} height={40}/>
          <span className="food-name">{f.name}</span>
          <span className="food-qty">{f.qty}</span>
        </li>
      ))}
    </ul>
  );
}

function LineGraph() {
  // Simple SVG demo line graph
  return (
    <svg width="100%" height="46" viewBox="0 0 148 46" className="trends-line">
      {/* grid */}
      <line x1="0" y1="46" x2="148" y2="46" stroke="#e8e8f7" strokeWidth="1"/>
      <line x1="0" y1="24" x2="148" y2="24" stroke="#e8e8f7" strokeWidth="1"/>
      {/* line */}
      <polyline
        fill="none"
        stroke="#4f6afb"
        strokeWidth="3"
        points="0,35 18,28 32,32 56,17 74,23 99,11 120,17 136,7 148,18"/>
    </svg>
  );
}
