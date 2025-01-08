import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, Users, Lightbulb, TrendingUp, 
  Boxes, Rocket, Target, Shield, X
} from 'lucide-react';

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { 
      number: '3+', 
      label: 'Years Experience',
      icon: <Users className="w-8 h-8" />,
      description: 'Pioneering excellence in technology'
    },
    { 
      number: '7+', 
      label: 'Ongoing Projects',
      icon: <Target className="w-8 h-8" />,
      description: 'Delivering impactful solutions'
    },
    { 
      number: '50+', 
      label: 'Expert Consultants',
      icon: <Lightbulb className="w-8 h-8" />,
      description: 'Innovative minds at work'
    },
    { 
      number: '1M+', 
      label: 'Client Served',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Building lasting partnerships'
    },
  ];

  const services = [
    { icon: <BarChart3 />, title: "Business Analytics" },
    { icon: <Boxes />, title: "Strategic Planning" },
    { icon: <Rocket />, title: "Innovation" },
    { icon: <Shield />, title: "Risk Management" },
  ];

  const storyContent = [
    {
      title: "Our Beginning",
      content: "KMV was founded in January 2024 by three visionary partners who shared a dream of creating something truly transformative. From our humble beginnings in a small apartment, we embarked on our journey with limited resources but unlimited determination and passion."
    },
    {
      title: "Growth & Evolution",
      content: "Through dedication and innovative thinking, we rapidly transformed our ideas into a flourishing enterprise. Our relocation to the prestigious offices of NASTP marked a pivotal moment in our journey, symbolizing our commitment to excellence and professional growth."
    },
    {
      title: "Our Values",
      content: "Innovation, integrity, and impactful results form the cornerstone of our success. We've built our reputation on fostering meaningful relationships and delivering exceptional value to our clients and partners."
    },
    {
      title: "Looking Forward",
      content: "Today, KMV stands at the forefront of innovation, ready to embrace new challenges and opportunities. While we continue to grow and evolve, we remain true to our founding principles, committed to shaping a future of continued success and innovation."
    }
  ];

  return (
    <section id="about-us" className="min-h-screen bg-background-light dark:bg-primary transition-colors duration-200">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-5xl font-bold text-text-light dark:text-text-dark mb-6">
                  How Did We
                  <span className="text-accent block mt-2">Get Here?</span>
                </h2>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button 
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-accent via-accent/80 to-accent text-text-dark px-8 py-3 rounded-full font-semibold"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>

            <motion.div 
              className="relative h-[400px] bg-accent/5 dark:bg-accent/10 rounded-2xl overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, rgba(var(--accent-rgb), 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, rgba(var(--accent-rgb), 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 0%, rgba(var(--accent-rgb), 0.1) 0%, transparent 50%)',
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="grid grid-cols-2 gap-6 p-8 relative">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="bg-background-light dark:bg-primary p-6 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/20 dark:bg-accent/30 p-3 text-accent mb-4">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-text-light dark:text-text-dark">
                      {service.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-muted-light/10 dark:bg-accent/20 rounded-xl backdrop-blur-sm hover:bg-accent/20 dark:hover:bg-accent/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-accent mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </h3>
                <p className="font-semibold text-text-light dark:text-text-dark mb-1">
                  {stat.label}
                </p>
                <p className="text-muted-light dark:text-text-dark">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-background-light dark:bg-primary max-w-4xl w-full rounded-2xl p-6 relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute right-4 top-4 text-text-light dark:text-text-dark hover:text-accent transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="space-y-8 max-h-[80vh] overflow-y-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">Our Journey</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                  </div>

                  {storyContent.map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-accent/5 dark:bg-accent/10 p-6 rounded-xl"
                    >
                      <h3 className="text-xl font-semibold text-accent mb-3">{section.title}</h3>
                      <p className="text-text-light dark:text-text-dark leading-relaxed">{section.content}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutUs;
