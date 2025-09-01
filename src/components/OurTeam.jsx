import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLinkedin, FaTwitter, FaEnvelope, FaAward, 
  FaBriefcase, FaClock, FaTrophy, FaStar, FaTimes,
  FaArrowRight, FaUser 
} from 'react-icons/fa';

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      expertise: 'Strategic Leadership',
      experience: '15+ years',
      image: null,
      achievements: [
        'Forbes 30 Under 30',
        'Led 100M+ revenue growth',
        'Industry Leadership Award 2023'
      ],
      skills: ['Strategic Planning', 'Business Development', 'Team Leadership'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'john@example.com'
      }
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      expertise: 'Technical Innovation',
      experience: '12+ years',
      image: null,
      achievements: [
        'Tech Innovator of the Year',
        'Published 15+ Patents',
        'MIT Technology Review Innovator'
      ],
      skills: ['AI/ML', 'System Architecture', 'Digital Transformation'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'jane@example.com'
      }
    },
    {
      name: 'Mike Johnson',
      role: 'CFO',
      expertise: 'Financial Strategy',
      experience: '10+ years',
      image: null,
      achievements: [
        'Financial Excellence Award',
        'Managed $500M Portfolio',
        'CFA Charterholder'
      ],
      skills: ['Financial Planning', 'Risk Management', 'Investment Strategy'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mike@example.com'
      }
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const ProfileModal = ({ member, onClose }) => {
    // Handle background click
    const handleBackgroundClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    // Handle close button click with stopPropagation
    const handleCloseClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      onClose();
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleBackgroundClick}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white dark:bg-primary-dark rounded-2xl overflow-hidden w-full max-w-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-accent/90 to-accent/70 p-6 text-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <FaUser className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-accent-light">{member.role}</p>
                </div>
              </div>
              <button
                onClick={handleCloseClick}
                className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200 text-white"
                aria-label="Close"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Modal Body */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            <div className="bg-muted-light/10 dark:bg-white/5 p-4 rounded-lg mb-6">
              <p className="text-muted-light dark:text-text-dark/80 italic">
                "{member.expertise} with {member.experience} of industry experience"
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-text-light dark:text-text-dark flex items-center mb-4">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  Key Achievements
                </h4>
                <ul className="space-y-3 pl-4">
                  {member.achievements.map((achievement, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span className="text-muted-light dark:text-text-dark/80">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-text-light dark:text-text-dark flex items-center mb-4">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  Core Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  {member.social.linkedin && (
                    <motion.a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="p-2 bg-accent/10 hover:bg-accent/20 rounded-full text-accent transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a 
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="p-2 bg-accent/10 hover:bg-accent/20 rounded-full text-accent transition-colors"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </motion.a>
                  )}
                  {member.social.email && (
                    <motion.a 
                      href={`mailto:${member.social.email}`}
                      whileHover={{ y: -2 }}
                      className="p-2 bg-accent/10 hover:bg-accent/20 rounded-full text-accent transition-colors"
                    >
                      <FaEnvelope className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
                
                <motion.button 
                  className="group inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors duration-300 mt-4 sm:mt-0 w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section
      id="our-team"
      className="min-h-screen bg-background-light dark:bg-primary py-20 px-4 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-text-light dark:text-text-dark mb-4"
          >
            Meet Our <span className="text-accent">Experts</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-light dark:text-text-dark/80 text-lg max-w-2xl mx-auto"
          >
            Our team of industry veterans brings decades of experience and innovation
            to every project we undertake.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="group bg-muted-light/10 dark:bg-accent/20 backdrop-blur-lg rounded-2xl p-6 h-full cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <FaUser className="w-24 h-24 text-accent/70" />
                  </div>
                  
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-accent text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg shadow-accent/20"
                    >
                      View Profile
                    </motion.button>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent mb-4">{member.role}</p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-light dark:text-text-dark/80">
                      <FaBriefcase className="w-4 h-4 text-accent" />
                      <span>{member.expertise}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-light dark:text-text-dark/80">
                      <FaClock className="w-4 h-4 text-accent" />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedMember && (
          <ProfileModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurTeam;
