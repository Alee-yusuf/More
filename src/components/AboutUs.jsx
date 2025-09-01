import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, Users, Lightbulb, TrendingUp, 
  Boxes, Rocket, Target, Shield, X, Check, ArrowRight,
  Award, Globe, Handshake, Heart, Star, UserCheck, Briefcase
} from 'lucide-react';

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Company Statistics
  const stats = [
    { 
      number: '3+', 
      label: 'Years Experience',
      icon: <Award className="w-8 h-8" />,
      description: 'Delivering excellence in technology solutions',
      color: 'from-blue-500 to-blue-400'
    },
    { 
      number: '50+', 
      label: 'Expert Team',
      icon: <UserCheck className="w-8 h-8" />,
      description: 'Dedicated professionals driving innovation',
      color: 'from-green-500 to-green-400'
    },
    { 
      number: '7+', 
      label: 'Ongoing Projects',
      icon: <Briefcase className="w-8 h-8" />,
      description: 'Transforming businesses daily',
      color: 'from-purple-500 to-purple-400'
    },
    { 
      number: '1M+', 
      label: 'Happy Clients',
      icon: <Heart className="w-8 h-8" />,
      description: 'Building lasting relationships',
      color: 'from-red-500 to-red-400'
    },
  ];

  // Core Services
  const services = [
    { 
      icon: <BarChart3 className="w-6 h-6" />, 
      title: "Business Analytics",
      description: "Data-driven insights for strategic decisions"
    },
    { 
      icon: <Boxes className="w-6 h-6" />, 
      title: "Strategic Planning",
      description: "Roadmaps for sustainable growth"
    },
    { 
      icon: <Rocket className="w-6 h-6" />, 
      title: "Digital Innovation",
      description: "Cutting-edge solutions for the future"
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Risk Management",
      description: "Protecting your business interests"
    },
  ];

  // Team Members
  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 10+ years in tech innovation",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Williams",
      role: "CTO",
      bio: "Tech strategist and solution architect",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      bio: "Operational excellence specialist",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "KMV transformed our business with their innovative solutions. Truly a game-changer!",
      author: "James Wilson",
      company: "TechNova Inc.",
      rating: 5
    },
    {
      quote: "Exceptional service and outstanding results. Highly recommended!",
      author: "Emily Parker",
      company: "Global Ventures",
      rating: 5
    },
    {
      quote: "Professional team that delivers beyond expectations.",
      author: "David Kim",
      company: "NextGen Solutions",
      rating: 4
    }
  ];

  // Company Story
  const storyContent = [
    {
      title: "Our Humble Beginnings",
      content: "Founded in 2024, KMV started as a small team of passionate technologists with a vision to revolutionize the industry. From our first office in a shared workspace, we've grown into a trusted partner for businesses worldwide.",
      icon: <Globe className="w-6 h-6" />
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
    <section 
      id="about-us" 
      className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-background-light to-background-light/90 dark:from-primary dark:to-primary/90 transition-colors duration-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mb-16 md:mb-24 lg:mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 max-w-2xl mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-sm font-medium text-accent mb-2 block">Our Story</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4 md:mb-6">
                  How Did We
                  <span className="text-accent block">Get Here?</span>
                </h2>
                <p className="text-muted-light dark:text-text-dark/80 text-base md:text-lg mb-6 md:mb-8">
                  From humble beginnings to becoming industry leaders, our journey is a testament to innovation, dedication, and excellence.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.button 
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/20 text-sm sm:text-base"
                >
                  Explore Our Journey
                </motion.button>
              </motion.div>
            </div>

            <motion.div 
              className="relative h-[320px] sm:h-[400px] lg:h-[480px] bg-accent/5 dark:bg-accent/10 rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
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
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 relative h-full">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="bg-background-light/80 dark:bg-primary/90 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/20 dark:bg-accent/30 p-2.5 sm:p-3 text-accent mb-3 sm:mb-4">
                      {React.cloneElement(service.icon, { className: 'w-full h-full' })}
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base md:text-lg text-text-light dark:text-text-dark">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.6 }}
          className="relative -mx-4 px-4 py-8 md:mx-0 md:px-0 md:py-12"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/5 to-transparent dark:from-accent/10 dark:to-transparent rounded-2xl" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-4 sm:p-5 md:p-6 bg-white/80 dark:bg-primary/90 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="text-accent mb-3 sm:mb-4">
                  {React.cloneElement(stat.icon, { className: 'w-8 h-8 sm:w-10 sm:h-10' })}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-1 sm:mb-2">
                  {stat.number}
                </h3>
                <p className="font-semibold text-sm sm:text-base text-text-light/80 dark:text-text-dark/90 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs sm:text-sm text-muted-light dark:text-text-dark/70">
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
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-white dark:bg-primary-dark rounded-2xl p-6 sm:p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-text-light dark:text-text-dark mb-2">
                    Our Journey
                  </h3>
                  <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
                </div>
                
                <div className="space-y-8 sm:space-y-10 relative">
                  {/* Timeline */}
                  <div className="absolute left-1 sm:left-4 md:left-6 h-full w-0.5 bg-gradient-to-b from-accent/30 to-transparent" />
                  
                  {storyContent.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 sm:pl-12 md:pl-16"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent border-4 border-white dark:border-primary-dark z-10" />
                      
                      <div className="bg-white/80 dark:bg-primary/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
                        <h4 className="text-lg sm:text-xl font-semibold text-text-light dark:text-text-dark mb-3 flex items-center">
                          <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                          {item.title}
                        </h4>
                        <p className="text-muted-light dark:text-text-dark/80 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
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
