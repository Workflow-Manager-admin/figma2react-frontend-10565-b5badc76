import React, { useState, useEffect } from "react";
import "./App.css";
import SidebarNav from "./components/SidebarNav";

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
        <header className="App-header">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
          <h2 className="dashboard-title" style={{ marginTop: "32px", color: "var(--text-main)" }}>
            {sidebarActive}
          </h2>
        </header>
        <main>
          <section className="dashboard-content">
            <p style={{ color: "var(--text-secondary)", margin: "48px auto", maxWidth: "420px", fontSize: "16px" }}>
              Replace this area with dashboard widgets/cards per design notes. (Sidebar menu working)
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
