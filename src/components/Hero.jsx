import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import { 
  BarChart, 
  TrendingUp, 
  Users, 
  Target, 
  CheckCircle2, 
  Briefcase 
} from 'lucide-react';

const EnhancedHero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const containerRef = useRef(null);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const container = containerRef.current;

    // GSAP animation for the background gradient
    gsap.to(container.querySelector('.bg-gradient-to-br'), {
      y: '+=50',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // GSAP animation for the icons
    gsap.to('.icon', {
      y: '+=10',
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.2,
    });
  }, []);

  return (
    <div
      id="hero"
      className="relative min-h-screen overflow-hidden bg-background-light dark:bg-primary"
      ref={containerRef}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"
        style={{ y }}
      />
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 h-screen flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-text-light dark:text-text-dark mb-6"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1 }}
          >
            <span className="text-accent">Where</span> Wisdom Meets <span className="text-accent">Need</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-light dark:text-muted-dark mb-8"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Your one-stop shop for building connections that build wealth. Scroll down and feel your net worth climb with every click!
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="about-us" smooth={true} duration={500} offset={-80}>
              <motion.button
                className="px-6 py-3 bg-accent text-white rounded-full shadow-lg hover:bg-accent-dark transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Us
              </motion.button>
            </Link>
            <Link to="apply-now" smooth={true} duration={500} offset={-80}>
              <motion.button
                className="px-6 py-3 border-2 border-accent text-accent rounded-full shadow-lg hover:bg-accent hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Right Visualization */}
        <div className="hidden md:block h-[400px]">
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Briefcase className="w-20 h-20 text-accent" />
            </div>
            {[BarChart, TrendingUp, Users, Target, CheckCircle2].map((Icon, index) => (
              <motion.div
                key={index}
                className={`icon absolute transform ${index === 0 && 'top-0 left-1/4'}
                  ${index === 1 && 'top-1/4 right-0'}
                  ${index === 2 && 'bottom-1/4 right-0'}
                  ${index === 3 && 'bottom-0 left-1/4'}
                  ${index === 4 && 'top-1/4 left-0'}
                `}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Icon className="w-10 h-10 text-accent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      
    </div>
  );
};

export default EnhancedHero;
