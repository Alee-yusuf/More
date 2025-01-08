import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import logoWhite from '../assets/images/logo-white.png';
import logoDark from '../assets/images/logo-dark.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsDarkMode(false);
    document.documentElement.classList.remove('dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: 'Home', section: 'hero' },
    { name: 'About', section: 'about-us' },
    { name: 'Team', section: 'our-team' },
    { name: 'Solutions', section: 'solutions' },
    { name: 'Jobs', section: 'career' },
    { name: 'Contact us', section: 'apply-now' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled
          ? 'py-2 bg-background-light/90 dark:bg-primary/90 shadow-lg'
          : 'py-3 bg-background-light/80 dark:bg-primary/80'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.div className="flex items-center">
              <img
                src={isDarkMode ? logoWhite : logoDark}
                alt="KMV Enterprises"
                className="h-11 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.section}
                to={item.section}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                onSetActive={() => setActiveSection(item.section)}
                className={`px-4 py-2 cursor-pointer ${
                  activeSection === item.section
                    ? 'text-accent'
                    : 'text-text-light dark:text-text-dark hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background-light dark:bg-primary p-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.section}
                to={item.section}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                onSetActive={() => setActiveSection(item.section)}
                className="block py-2 text-sm text-text-light dark:text-text-dark hover:text-accent"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
