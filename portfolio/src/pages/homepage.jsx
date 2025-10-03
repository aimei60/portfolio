import Navbar from "../components/navbar";
import "../css/homepage.css"
import me from "../images/kitten.webp"

function Homepage() {
    return (
        <>
        <Navbar />
        <section className="homepage-container">
            <div className="homepage-inner-container">
            <img className="image" src={me} alt="Portrait of A" />
            <div className="intro-description">
                <h1 className="title">Welcome, I am A</h1>
                <p className="description">Junior Software Engineer | Fullstack & CI/CD</p>
                <p className="intro">Blending creativity and technology, I thrive on bringing ideas to life,
                solving challenges and continuous learning along the way.</p>
                <div className="buttons">
                <a href="#contact" className="btn btn-primary"><span className="btn-icon">✉️</span> Contact Me</a>
                <a href="#projects" className="btn btn-secondary"><span className="btn-icon">📂</span> View Projects</a>
                </div>
                <div className="social-links">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="icon" /></a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" className="icon" /></a>
                </div>
            </div>
            </div>
        </section>

        <section className="skills-container">
            <div className="skills-inner-container">
                

            </div>

        </section>
        </>
    )

}

export default Homepage
