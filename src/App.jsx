import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import Navbar from './components/Navibar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid py-5 mt-5 text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
