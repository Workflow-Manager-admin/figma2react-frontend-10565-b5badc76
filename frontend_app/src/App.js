import React, { useState, useEffect } from "react";
import "./App.css";
import SidebarNav from "./components/SidebarNav";
import DashboardHeader from "./components/DashboardHeader";
import DashboardMain from "./components/DashboardMain";

// PUBLIC_INTERFACE
function App() {
  /**
   * Main entrypoint for dashboard application UI
   * Handles theme, sidebar navigation state, and main content placement.
   */
  const [theme, setTheme] = useState("light");
  const [sidebarActive, setSidebarActive] = useState("Dashboard");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Sidebar navigation handler
  function handleSidebarNav(name) {
    setSidebarActive(name);
    // In a full app you would route here
  }

  return (
    <div className="App">
      <SidebarNav active={sidebarActive} onNavigate={handleSidebarNav} />
      <div className="app-main-content">
        <DashboardHeader />
        <main>
          <DashboardMain />
        </main>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </div>
  );
}

export default App;
