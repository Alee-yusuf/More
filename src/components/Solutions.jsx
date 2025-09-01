import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaHeadset, FaChartLine, FaTimes, FaArrowRight } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      title: 'Telesales',
      description:
        "At KMV Enterprises, we pride ourselves on being trailblazers in the TeleSales industry. Backed by a team of highly skilled professionals, we excel in managing complex sales projects across diverse sectors, including carrier logistics, cable, internet, phone services, and electronic commodities.",
      icon: <FaPhoneAlt className="w-8 h-8" />,
      features: ['Cutting-Edge CRM Systems: Streamlining operations for peak efficiency and seamless customer management.', 'Data-Driven Strategies: Leveraging analytics to unlock insights and drive measurable results.', 'Customer Engagement Excellence: Building meaningful connections to foster loyalty and satisfaction.', ],
      },
    {
      title: 'Customer Support',
    description:
        "KMV is renowned for its innovative and customer-centric support solutions. Our support executives are true masters of their craft, honing their skills through extensive experience serving over a million customers across industries such as gaming, finance, and social media.",
      icon: <FaHeadset className="w-8 h-8" />,
      features: ['Unmatched Expertise: Decades of combined experience across diverse industries.', 'Customer-First Approach: Personalized solutions tailored to meet unique client needs.', 'Proven Track Record: Delivering exceptional support that fosters trust and loyalty.', ],
      },
    {
      title: 'Cryptocurrency & Forex Trading',
      description:
        "KMV operates as a premier investment firm, leveraging the expertise of our accomplished trading specialists to optimize capital allocation in cryptocurrency and forex markets. Through rigorous market analysis and precise strategies, we design tailored investment pathways that maximize returns while mitigating risk.",
      icon: <FaChartLine className="w-8 h-8" />,
      features: ['Strategic cryptocurrency asset management', 'Sophisticated forex market strategies', 'Advanced risk mitigation frameworks', 'Real-time market intelligence integration', ],
      },
  ];

  return (
    <section id="solutions" className="relative min-h-screen bg-background-light dark:bg-primary/95 py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/5 dark:bg-accent-light/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-accent/10 dark:bg-accent-light/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <motion.div 
        className="relative container mx-auto z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block text-sm font-medium text-accent dark:text-accent-light mb-3">Our Services</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-light/90 dark:text-text-dark/90 mb-4">
            Innovative <span className="text-accent dark:text-accent-light">Solutions</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </motion.div>

        {/* Grid of solution cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group bg-white/90 dark:bg-primary/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 cursor-pointer border border-gray-100/50 dark:border-gray-800/50 shadow-lg hover:shadow-xl hover:shadow-accent/5 dark:hover:shadow-accent-light/5 transition-all duration-300 overflow-hidden relative"
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedSolution(solution)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-accent/10 dark:bg-accent-light/10 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-accent/20 dark:group-hover:bg-accent-light/20 transition-colors duration-300"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  {React.cloneElement(solution.icon, { className: 'w-8 h-8 text-accent dark:text-accent-light' })}
                </motion.div>
                <h3 className="text-xl font-bold text-text-light/90 dark:text-text-dark/90 mb-3 group-hover:text-accent dark:group-hover:text-accent-light transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-text-light/70 dark:text-text-dark/70 text-sm mb-4 line-clamp-2">
                  {solution.description.substring(0, 100)}...
                </p>
                <div className="flex items-center text-accent dark:text-accent-light font-medium text-sm group-hover:translate-x-1 transition-all duration-300 justify-center sm:justify-start">
                  Learn more <FiArrowRight className="ml-2 group-hover:ml-3 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <motion.div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setSelectedSolution(null)}
          >
            <motion.div 
              className="bg-white dark:bg-primary/95 backdrop-blur-md rounded-2xl overflow-hidden w-full max-w-2xl shadow-2xl border border-gray-100/30 dark:border-gray-800/50"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-accent/90 to-accent/80 dark:from-accent-light/90 dark:to-accent-light/80 p-6 text-white">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      {React.cloneElement(selectedSolution.icon, { className: 'w-6 h-6 text-white' })}
                    </div>
                    <h3 className="text-2xl font-bold">{selectedSolution.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedSolution(null)}
                    className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200 text-white"
                    aria-label="Close"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Modal Body */}
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                <p className="text-text-light/80 dark:text-text-dark/80 mb-6 leading-relaxed">
                  {selectedSolution.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-text-light dark:text-text-dark flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {selectedSolution.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span className="text-text-light/80 dark:text-text-dark/80">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                  <button className="group inline-flex items-center px-6 py-3 bg-accent dark:bg-accent-light text-white rounded-lg font-medium hover:bg-accent/90 dark:hover:bg-accent-light/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 dark:hover:shadow-accent-light/20">
                    Get Started
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-all duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Solutions;

// Add custom animation keyframes for the blob animation
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 15s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
`;
document.head.appendChild(style);
