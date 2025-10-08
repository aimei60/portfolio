//navbar
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css"

function NavBar() {
  function getInitialMode() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      return saved;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      return "dark";
    } else {
      return "light";
    }
  }

  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", mode);
  }, [mode]);

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }

  let buttonLabel;
  if (mode === "dark") {
    buttonLabel = "☀︎"; 
  } else {
    buttonLabel = "⏾"; 
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="left">
          <Link to="/" className="logo">Aimei.dev</Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/events" className="nav-link">Events & Community</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
        </div>
        <button className="theme-btn" onClick={toggleMode}>{buttonLabel}</button>
      </div>
    </header>
  );
}

export default NavBar;
