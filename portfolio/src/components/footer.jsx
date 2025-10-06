import "../css/footer.css"
import { Link } from 'react-router-dom';

function Footer() {
    return <div className="footer">
        <div className="footer-inner-container">
            <div className="left-side">
                <div className="copyright">© 2025 A. All rights reserved.</div>
            </div>
                <div className="right-side">
                    <Link to="/contact" className="contact">Contact</Link>
                    <div className="links">
                    <a target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="icon" /></a>
                    <a target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" className="icon" /></a>
                    </div>
                </div>
                </div>
            </div>

}

export default Footer