import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ChemistryPage from './pages/Chemistry';
import PhysicsPage from './pages/Physics';
import HomePage from './pages/Home';
import STEMKitsPage from './pages/StemKit';
import Footer from './pages/Footer';
import ImageEnhancer from './pages/ImageEnhancer';
import MastersConsultation from './pages/Masters';
import QnA from './pages/QnA';
import AuthPage from './pages/AuthPage'; // login/signup

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/chemistry" element={<ChemistryPage />} />
        <Route path="/physics" element={<PhysicsPage />} />
        <Route path="/requests" element={<QnA />} />
        <Route path="/stem" element={<STEMKitsPage />} />
        <Route path="/search" element={<ImageEnhancer />} />
        <Route path="/consult" element={<MastersConsultation />} />
        <Route path="/auth" element={<AuthPage />} /> {/* 👈 Only at /auth */}
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;