import "../css/footer.css"

function Footer() {
    return <div className="footer">
        <div className="footer-inner-container">
            <div className="left-side">
                <div className="copyright">© 2025 A. All rights reserved.</div>
            </div>
                <div className="right-side">
                    <a href="#contact" className="contact">Contact</a>
                    <div className="links">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="icon" /></a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" className="icon" /></a>
                    </div>
                </div>
                </div>
            </div>

}

export default Footer