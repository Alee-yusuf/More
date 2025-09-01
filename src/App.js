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
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const Layout = ({ children }) => (
    <div className="App">
      <Navbar />
      {children}
    </div>
  );

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <Routes>
              <Route path="/" element={
                <Layout>
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
                </Layout>
              } />
              <Route path="/dashboard" element={
                <Layout>
                  <Dashboard />
                </Layout>
              } />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;