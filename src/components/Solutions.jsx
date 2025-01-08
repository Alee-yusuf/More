import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      title: 'Telesales',
      description:
        "At KMV Enterprises, we pride ourselves on being trailblazers in the TeleSales industry. Backed by a team of highly skilled professionals, we excel in managing complex sales projects across diverse sectors, including carrier logistics, cable, internet, phone services, and electronic commodities.",
      icon: '📞',
      features: ['Cutting-Edge CRM Systems: Streamlining operations for peak efficiency and seamless customer management.', 'Data-Driven Strategies: Leveraging analytics to unlock insights and drive measurable results.', 'Customer Engagement Excellence: Building meaningful connections to foster loyalty and satisfaction.', ],
      },
    {
      title: 'Customer Support',
    description:
        "KMV is renowned for its innovative and customer-centric support solutions. Our support executives are true masters of their craft, honing their skills through extensive experience serving over a million customers across industries such as gaming, finance, and social media.",
      icon: '🎧',
      features: ['Unmatched Expertise: Decades of combined experience across diverse industries.', 'Customer-First Approach: Personalized solutions tailored to meet unique client needs.', 'Proven Track Record: Delivering exceptional support that fosters trust and loyalty.', ],
      },
    {
      title: 'Cryptocurrency & Forex Trading',
      description:
        "KMV operates as a premier investment firm, leveraging the expertise of our accomplished trading specialists to optimize capital allocation in cryptocurrency and forex markets. Through rigorous market analysis and precise strategies, we design tailored investment pathways that maximize returns while mitigating risk.",
      icon: '💹',
      features: ['Strategic cryptocurrency asset management', 'Sophisticated forex market strategies', 'Advanced risk mitigation frameworks', 'Real-time market intelligence integration', ],
      },
  ];

  return (
    <section id="solutions" className="min-h-screen bg-background-light dark:bg-primary py-20 px-4 sm:px-6 md:px-10">
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
            Our <span className="text-accent">Solutions</span>
          </h2>
        </motion.div>

        {/* Grid of solution cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-muted-light/10 dark:bg-accent/20 rounded-2xl p-6 sm:p-8 cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSolution(solution)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center">
                <motion.span 
                  className="text-4xl sm:text-5xl mb-4 block"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {solution.icon}
                </motion.span>
                <h3 className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark">{solution.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <motion.div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white dark:bg-primary-dark rounded-lg p-6 max-w-md w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-right">
                <button
                  className="text-red-500 font-bold"
                  onClick={() => setSelectedSolution(null)}
                >
                  Close
                </button>
              </div>
              <div className="text-center">
                <span className="text-4xl">{selectedSolution.icon}</span>
                <h3 className="text-2xl font-bold my-4">{selectedSolution.title}</h3>
                <p className="text-sm text-muted-light dark:text-text-dark mb-4">
                  {selectedSolution.description}
                </p>
                <ul className="list-disc list-inside text-left">
                  {selectedSolution.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-light dark:text-text-dark">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Solutions;
