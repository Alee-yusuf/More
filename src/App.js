import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurTeam from './components/OurTeam';
import Solutions from './components/Solutions';
import Careers from './components/Careers';
import ApplyNow from './components/ApplyNow';
import Footer from './components/Footer';
import Dashboard from './components/dashboard';
import Chatbot from './components/Chatbot';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <AboutUs />
                  <OurTeam />
                  <Solutions />
                  <Careers />
                  <ApplyNow />
                  <Footer />
                  <Chatbot />
                </>
              } />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;