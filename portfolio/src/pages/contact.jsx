import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../css/contact.css"

function Contact() {
    return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-inner-container">
          <div className="contact-box">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-subtitle">
              Have a project in mind, an idea to share, or simply want to chat? I’d love to hear from you.
            </p>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Write your message..." required />
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
    )
}

export default Contact