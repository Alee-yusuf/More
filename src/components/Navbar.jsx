import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Home, User, Users, Layers, Briefcase, Mail } from 'lucide-react';
import logoWhite from '../assets/images/logo-white.png';
import logoDark from '../assets/images/logo-dark.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef(null);

  // Navigation items
  const navItems = [
    { name: 'Home', section: 'hero', icon: <Home className="w-5 h-5" /> },
    { name: 'About', section: 'about-us', icon: <User className="w-5 h-5" /> },
    { name: 'Team', section: 'our-team', icon: <Users className="w-5 h-5" /> },
    { name: 'Solutions', section: 'solutions', icon: <Layers className="w-5 h-5" /> },
    { name: 'Careers', section: 'careers', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Contact', section: 'apply-now', icon: <Mail className="w-5 h-5" /> },
  ];

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  // Initialize theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  // Scroll to section function - FIXED VERSION
  const scrollToSection = useCallback((sectionId) => {
    // First close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = 'unset';
    }

    // Small delay to allow menu to close smoothly
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = navRef.current?.offsetHeight || 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update active section immediately
        setActiveSection(sectionId);
      }
    }, isMobileMenuOpen ? 100 : 0);
  }, [isMobileMenuOpen]);

  // Handle scroll for navbar background and active section
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 50);
          
          // Update active section
          const scrollPosition = scrollY + 150;
          let currentSection = 'hero';
          
          for (const item of navItems) {
            const section = document.getElementById(item.section);
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.offsetHeight;
              
              if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.id;
              }
            }
          }
          
          if (currentSection !== activeSection) {
            setActiveSection(currentSection);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, activeSection]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : 'unset';
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }
  }, [isMobileMenuOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-gray-100/20 dark:border-gray-800/30 ${
          isScrolled 
            ? 'py-2 bg-background-light/96 dark:bg-primary/96 shadow-lg shadow-black/5 dark:shadow-black/20' 
            : 'py-3 bg-background-light/92 dark:bg-primary/92'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <img 
                src={isDarkMode ? logoWhite : logoDark} 
                alt="KMV Enterprises" 
                className="h-11 w-auto"
              />
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className={`relative px-4 py-2.5 rounded-lg transition-all duration-300 cursor-pointer group ${
                    activeSection === item.section 
                      ? 'text-accent dark:text-accent-light font-semibold bg-accent/10 dark:bg-accent-light/10' 
                      : 'text-text-light/80 hover:text-accent dark:text-text-dark/80 dark:hover:text-accent-light hover:bg-accent/5 dark:hover:bg-accent-light/5'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-accent/10 dark:bg-accent-light/10 rounded-lg"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
              
              <div className="ml-4 pl-4 border-l border-gray-300/50 dark:border-gray-600/50">
                <button
                  onClick={toggleDarkMode}
                  className="p-2.5 rounded-lg bg-accent/10 hover:bg-accent/20 dark:bg-accent-light/10 dark:hover:bg-accent-light/20 text-accent dark:text-accent-light transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  aria-label="Toggle dark mode"
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: isDarkMode ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                  </motion.div>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 dark:bg-accent-light/10 dark:hover:bg-accent-light/20 text-accent dark:text-accent-light transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50"
                aria-label="Toggle dark mode"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDarkMode ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                </motion.div>
              </button>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 dark:bg-accent-light/10 dark:hover:bg-accent-light/20 text-accent dark:text-accent-light transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="w-5 h-5" />
                  ) : (
                    <FaBars className="w-5 h-5" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMobileMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-background-light/95 dark:bg-primary/95 backdrop-blur-md z-50 shadow-2xl flex flex-col lg:hidden border-l border-gray-100/20 dark:border-gray-800/30"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200/50 dark:border-gray-700/50">
                <img 
                  src={isDarkMode ? logoWhite : logoDark} 
                  alt="KMV Enterprises" 
                  className="h-10 w-auto"
                />
                <button 
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg text-gray-700 hover:bg-accent/10 dark:text-gray-200 dark:hover:bg-accent-light/10 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors duration-200"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-2 px-4">
                  {navItems.map((item, index) => (
                    <motion.li 
                      key={item.section}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.section)}
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                          activeSection === item.section
                            ? 'bg-accent/10 text-accent dark:bg-accent-light/10 dark:text-accent-light font-semibold'
                            : 'text-text-light/90 hover:text-accent dark:text-text-dark/90 dark:hover:text-accent-light hover:bg-accent/5 dark:hover:bg-accent-light/5'
                        }`}
                      >
                        <span className="mr-3">{item.icon}</span>
                        <span>{item.name}</span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="p-6 border-t border-gray-200/70 dark:border-gray-800/70 bg-gradient-to-r from-accent/5 to-transparent dark:from-accent-light/5"
              >
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">
                    Connect with us
                  </p>
                  <div className="flex space-x-3">
                    <a 
                      href="#" 
                      className="p-3 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-accent/20 dark:hover:bg-accent-light/20 hover:text-accent dark:hover:text-accent-light transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/50"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="p-3 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-accent/20 dark:hover:bg-accent-light/20 hover:text-accent dark:hover:text-accent-light transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/50"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="p-3 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-accent/20 dark:hover:bg-accent-light/20 hover:text-accent dark:hover:text-accent-light transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/50"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  };

export default Navbar;