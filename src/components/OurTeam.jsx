import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLinkedin, FaTwitter, FaEnvelope, FaAward, 
  FaBriefcase, FaClock, FaTrophy, FaStar, FaTimes 
} from 'react-icons/fa';

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      expertise: 'Strategic Leadership',
      experience: '15+ years',
      image: '/api/placeholder/400/400',
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
      image: '/api/placeholder/400/400',
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
      image: '/api/placeholder/400/400',
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
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleBackgroundClick}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white dark:bg-primary-dark rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <motion.button
              onClick={handleCloseClick}
              whileTap={{ scale: 0.95 }}
              className="absolute right-0 top-0 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full z-10 touch-none"
              style={{ touchAction: 'none' }}
            >
              <FaTimes className="w-6 h-6" />
            </motion.button>
            
            <div className="flex flex-col md:flex-row gap-6 pt-8 md:pt-0">
              <div className="w-full md:w-1/3">
                <motion.div
                  className="relative rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
                
                <div className="flex justify-center gap-4 mt-4">
                  <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                    className="p-2 bg-accent/10 hover:bg-accent/20 rounded-full text-accent">
                    <FaLinkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                    className="p-2 bg-accent/10 hover:bg-accent/20 rounded-full text-accent">
                    <FaTwitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                    className="p-2 bg-accent/10 hover:bg-accent/20 rounded-full text-accent">
                    <FaEnvelope className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-3xl font-bold text-text-light dark:text-text-dark">
                  {member.name}
                </h3>
                <p className="text-accent text-xl mb-4">{member.role}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <FaTrophy className="w-5 h-5 text-accent" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 text-muted-light dark:text-text-dark/80"
                        >
                          <FaStar className="w-4 h-4 text-accent" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <FaAward className="w-5 h-5 text-accent" />
                      Core Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
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
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.span
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      View Profile
                    </motion.span>
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
