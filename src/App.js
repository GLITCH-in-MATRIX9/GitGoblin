import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutCards from './components/AboutCards';

import Repositories from './Pages/Repositories';
import GitGoblinAi from './Pages/GitGoblinAi';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import GetStartedCTA from './components/GetStartedCTA';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* Appears on all pages */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutCards />
              <HowItWorks/>
              <Reviews/>
              <GetStartedCTA/>
            </>
          }
        />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/GitGoblinAi" element={<GitGoblinAi/>} />
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
