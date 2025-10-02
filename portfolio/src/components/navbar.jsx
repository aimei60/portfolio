//navbar
import "../css/NavBar.css"

function NavBar () {
    return <header className="header">
        <div className="header-inner">
            <div className="left">
                <a href="/" className="logo">A.dev</a>
                <nav className="nav">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#events" className="nav-link">Events & Community</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
                </div>
                <button className="theme-btn">☀︎</button>
            </div>
        </header>

}

export default NavBar