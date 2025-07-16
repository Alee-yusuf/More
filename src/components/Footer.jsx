import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logoWhite from '../assets/images/logo-white.png';
import logoDark from '../assets/images/logo-dark.png';

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

      </div>
    </motion.footer>
  );
};

export default Footer;