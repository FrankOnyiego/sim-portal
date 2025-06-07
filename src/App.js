// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ChemistryPage from './pages/Chemistry';
import PhysicsPage from './pages/Physics';
import HomePage from './pages/Home';
import STEMKitsPage from './pages/StemKit';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/chemistry" element={<ChemistryPage />} />
        <Route path="/physics" element={<PhysicsPage />} />
        <Route path="/stem" element={<STEMKitsPage />} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
