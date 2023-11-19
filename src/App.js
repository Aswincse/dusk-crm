import { Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar';


function App() {


  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
