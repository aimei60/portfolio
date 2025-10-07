import "../css/events.css"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";

function Events() {
  const [activeCategory, setActiveCategory] = useState("All");

  let showHackathon = false;
  let showWorkshop = false;
  let showCommunity = false;

  if (activeCategory === "All") {
    showHackathon = true;
    showWorkshop = true;
    showCommunity = true;
  } else if (activeCategory === "Hackathons") {
    showHackathon = true;
  } else if (activeCategory === "Workshops") {
    showWorkshop = true;
  } else if (activeCategory === "Community") {
    showCommunity = true;
  }

  let allActive = "";
  let communityActive = "";
  let workshopActive = "";
  let hackathonActive = "";

  if (activeCategory === "All") {
    allActive = "active";
  } else if (activeCategory === "Community") {
    communityActive = "active";
  } else if (activeCategory === "Workshops") {
    workshopActive = "active";
  } else if (activeCategory === "Hackathons") {
    hackathonActive = "active";
  }

  let hackathonContent = null;
  if (showHackathon) {
    hackathonContent = (
      <>
        <div className="event-container">
          <div className="photo"></div>
          <div className="description-container">
            <div className="date">March 2024</div>
            <div className="location">London, UK</div>
            <div className="title">AI Hackathon</div>
            <div className="organiser">Encode</div>
            <div className="description"></div>
          </div>
        </div>

        <div className="event-container">
          <div className="photo"></div>
          <div className="description-container">
            <div className="date">March 2025</div>
            <div className="location">London, UK</div>
            <div className="title">Quantum Curiosity: Creative Hackathon</div>
            <div className="organiser">Urban MBA</div>
            <div className="description"></div>
          </div>
        </div>
      </>
    );
  }

  let workshopContent = null;
  if (showWorkshop) {
    workshopContent = (
      <>
        <div className="event-container">
          <div className="photo"></div>
          <div className="description-container">
            <div className="date">May 2025</div>
            <div className="location">London, UK</div>
            <div className="title">AI Essentials Workshop</div>
            <div className="organiser">Urban MBA</div>
            <div className="description"></div>
          </div>
        </div>

        <div className="event-container">
          <div className="photo"></div>
          <div className="description-container">
            <div className="date">July 2025</div>
            <div className="location">London, UK</div>
            <div className="title">Video & AI Workshop</div>
            <div className="organiser">Urban MBA</div>
            <div className="description"></div>
          </div>
        </div>
      </>
    );
  }

  let communityContent = null;
  if (showCommunity) {
    communityContent = (
      <div className="event-container">
        <div className="photo"></div>
        <div className="description-container">
          <div className="date">Monthly</div>
          <div className="location">Canterbury / Folkestone, Kent</div>
          <div className="title">CodeHarbour</div>
          <div className="organiser">Alex C.</div>
          <div className="description"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="events-and-community-container">
        <h2 className="events-title">Events & Community</h2>
        <div className="event-selector">
          <div className={allActive} onClick={() => setActiveCategory("All")}>All</div>
          <div className={communityActive} onClick={() => setActiveCategory("Community")}>Community</div>
          <div className={workshopActive} onClick={() => setActiveCategory("Workshops")}>Workshops</div>
          <div className={hackathonActive} onClick={() => setActiveCategory("Hackathons")}>Hackathons</div>
        </div>

        <div className="events-list">
          {hackathonContent}
          {workshopContent}
          {communityContent}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
