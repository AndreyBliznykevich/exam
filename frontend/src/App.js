import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Calculator from './pages/Calculator';
import Contacts from './pages/Contacts';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/services">Услуги</Link></li>
          <li><Link to="/calculator">Калькулятор</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
          <li><Link to="/gallery">Галерея</Link></li>
          <li><Link to="/blog">Блог</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
		<Route path="/calculator" element={<Calculator />} />
		<Route path="/contacts" element={<Contacts />} />
		<Route path="/gallery" element={<Gallery />} />
		 <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
