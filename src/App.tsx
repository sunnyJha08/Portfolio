// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";
import { Navbar } from "./components/Navbar";
/*// Assuming you create these page components
    import About from './pages/About';
 */
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
