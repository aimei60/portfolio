//navbar
import { Link } from "react-router-dom";
import "../css/NavBar.css"

function NavBar () {
    return <header className="header">
        <div className="header-inner">
            <div className="left">
                <Link to="/" className="logo">A.dev</Link>
                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/events" className="nav-link">Events & Community</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>
                </div>
                <button className="theme-btn">⏾</button>
            </div>
        </header>

}

export default NavBar