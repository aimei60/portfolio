import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />  {/* 👈 new route */}
      </Routes>
    </Router>
  );
}

export default App;