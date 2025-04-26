// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Branding from './pages/Branding';
import Illustration from './pages/Illustration';
import ProductPhotography from './pages/ProductPhotography';
import Clothing from './pages/Clothing';
import ImageGrid from './components/ImageGrid';
import Home from './pages/Home'; // Add this if you have a Home page

// Wrapper component to use useLocation (outside Router this hook won't work)
const AppContent = () => {
  const location = useLocation();

  return (
    <>

      {location.pathname === '/' && <ImageGrid />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/illustration" element={<Illustration />} />
        <Route path="/photography" element={<ProductPhotography />} />
        <Route path="/clothing" element={<Clothing />} />
        {/* Add more routes like About, Clients, Contact if needed */}
      </Routes>

      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
