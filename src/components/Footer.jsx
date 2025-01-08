import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import logoWhite from '../assets/images/logo-white.png';
import logoDark from '../assets/images/logo-dark.png';

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Listen for dark mode changes
  useEffect(() => {
    const darkModeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });

    darkModeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Initial dark mode check
    setIsDarkMode(document.documentElement.classList.contains('dark'));

    return () => darkModeObserver.disconnect();
  }, []);

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <motion.footer
      className="w-full py-12 bg-background-light dark:bg-primary relative overflow-hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-accent/5" />
        <motion.div 
          className="absolute right-0 top-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute left-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center justify-between space-y-6 md:space-y-0">
          {/* Logo with scroll functionality */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <img
                src={isDarkMode ? logoWhite : logoDark}
                alt="KMV Enterprises"
                className="h-11 w-auto"
              />
            </motion.div>
          </Link>

          {/* Address */}
          <div className="w-full md:w-auto text-center md:text-left">
            <div className="space-y-2">
              <p className="text-sm font-medium text-text-light dark:text-text-dark">
              Old Airport Building, 69 Abid Majeed Rd, Cantonment, Lahore, Punjab 54000, Pakistan
              </p>
              <p className="text-sm text-muted-light dark:text-text-dark/80">
                contact@kmventerprises.com
              </p>
              <p className="text-sm text-muted-light dark:text-text-dark/80">
              +92 327 1192722
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="w-full md:w-auto flex justify-center md:justify-end space-x-6">
            {[
              { Icon: FaFacebook, label: "Facebook", href: "https://facebook.com" },
              { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
              { Icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" }
            ].map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute -inset-2 bg-accent/10 dark:bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon className="relative text-2xl text-text-light dark:text-text-dark group-hover:text-accent transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Copyright */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-muted-light dark:text-text-dark/60">
            &copy; {new Date().getFullYear()} KMV Enterprises. All rights reserved.
          </p>
        </motion.div>

        {/* Admin Login Button */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsLoginVisible(true)}
            className="py-2 px-4 bg-accent hover:bg-accent-dark text-white rounded-xl transition-colors duration-200"
          >
            Admin Login
          </button>
        </div>

        {/* Login Popup */}
        {isLoginVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsLoginVisible(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-background-light dark:bg-primary w-full max-w-md p-6 rounded-2xl shadow-float dark:shadow-float-dark"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">
                Admin Login
              </h3>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mb-4 p-3 bg-accent/5 dark:bg-accent/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-4 p-3 bg-accent/5 dark:bg-accent/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
              />
              <button
                onClick={handleLogin}
                className="w-full py-3 bg-accent hover:bg-accent-dark text-white rounded-xl transition-colors duration-200"
              >
                Login
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.footer>
  );
};

export default Footer;