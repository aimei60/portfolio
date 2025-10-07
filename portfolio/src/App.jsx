import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage';
import Contact from './pages/contact';
import Events from "./pages/events";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;