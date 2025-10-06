import Navbar from "../components/navbar";
import "../css/homepage.css"
import me from "../images/kitten.webp"
import Footer from "../components/footer";

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
                <a className="btn btn-primary"><span className="btn-icon">✉️</span> Contact Me</a>
                <a className="btn btn-secondary"><span className="btn-icon">📂</span> View Projects</a>
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

        <section className="skills-section">
            <div className="skills-inner-container">
                <h2 className="skills">Skills</h2>
                <h2 className="skills-tech">Technologies I have worked with</h2>
                <div className="skills-grid">
                <div className="skill-card">
                    <h3 className="skill-title">Frontend</h3>
                    <ul className="skill-list">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>React</li>
                    <li>JavaScript (ES6+)</li>
                    </ul>
                </div>

                <div className="skill-card">
                    <h3 className="skill-title">Backend</h3>
                    <ul className="skill-list">
                    <li>Python</li>
                    <li>FastAPI</li>
                    <li>SQLAlchemy</li>
                    <li>PostgreSQL</li>
                    </ul>
                </div>

                <div className="skill-card">
                    <h3 className="skill-title">DevOps & Deployment</h3>
                    <ul className="skill-list">
                    <li>Docker</li>
                    <li>CI/CD (GitHub Actions)</li>
                    <li>Vercel</li>
                    <li>Fly.io</li>
                    <li>Neon</li>
                    </ul>
                </div>

                <div className="skill-card">
                    <h3 className="skill-title">Professional Soft Skills</h3>
                    <ul className="skill-list">
                    <li>Team leadership and supervision</li>
                    <li>Effective communication and collaboration</li>
                    <li>Problem-solving and critical thinking</li>
                    <li>Adaptability and fast learning</li>
                    <li>Time management and accountability</li>
                    <li>Continuous improvement mindset</li>
                    <li>Keen to assist and help wherever possible</li>
                    <li>Positive attitude and a genuine love for learning</li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )

}

export default Homepage
