import React, { useState, useRef, } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Mail, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);
  const isInView = useInView(formRef, {
    once: false,
    margin: "-100px"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  // Remove GSAP ScrollTrigger as it conflicts with Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    },
  };

  const formFieldVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    }
  };

  const inputClasses = (fieldName) => `
    w-full px-4 py-3 rounded-lg
    bg-background-light dark:bg-primary
    border-2 
    ${focusedField === fieldName 
      ? 'border-accent' 
      : 'border-muted-light/20 dark:border-accent/20'}
    text-text-light dark:text-text-dark
    placeholder-muted-light/50 dark:placeholder-text-dark/50
    focus:outline-none focus:border-accent
    transition-all duration-300
  `;

  return (
    <section id='apply-now'
      ref={formRef}
      className="min-h-screen bg-background-light dark:bg-primary transition-colors duration-200 py-20 px-4 overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            className="text-center mb-16" 
            variants={itemVariants}
          >
            <h2 className="text-5xl font-bold text-text-light dark:text-text-dark mb-6">
              Contact
              <span className="text-accent mt-2"> Us</span>
            </h2>
            <p className="text-muted-light dark:text-text-dark text-lg max-w-2xl mx-auto leading-relaxed">
              Have questions or ready to transform your business? We're here to help.
              Reach out to us and experience the difference of working with industry experts.
            </p>
          </motion.div>

          <motion.div 
            className="relative bg-white/50 dark:bg-accent/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg dark:shadow-accent/5"
            variants={itemVariants}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
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

            <motion.form 
              onSubmit={handleSubmit} 
              className="relative z-10 space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={formFieldVariants}>
                <label className="text-text-light dark:text-text-dark mb-2 block text-sm font-medium">
                  Name
                </label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-text-dark/50 group-hover:text-accent transition-colors duration-200 h-5 w-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your Name"
                    className={`${inputClasses('name')} pl-12`}
                  />
                </div>
              </motion.div>

              <motion.div variants={formFieldVariants}>
                <label className="text-text-light dark:text-text-dark mb-2 block text-sm font-medium">
                  Email
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-text-dark/50 group-hover:text-accent transition-colors duration-200 h-5 w-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your Email"
                    className={`${inputClasses('email')} pl-12`}
                  />
                </div>
              </motion.div>

              <motion.div variants={formFieldVariants}>
                <label className="text-text-light dark:text-text-dark mb-2 block text-sm font-medium">
                  Message
                </label>
                <div className="relative group">
                  <MessageSquare className="absolute left-3 top-3 text-muted-light dark:text-text-dark/50 group-hover:text-accent transition-colors duration-200 h-5 w-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your Message"
                    rows="4"
                    className={`${inputClasses('message')} pl-12 resize-none`}
                  />
                </div>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-accent via-accent/80 to-accent text-text-dark mt-8 py-4 px-6 rounded-lg font-medium flex items-center justify-center space-x-3 group hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={formFieldVariants}
              >
                <span>Send Message</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                <Sparkles className="h-5 w-5 animate-pulse" />
              </motion.button>
            </motion.form>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 dark:bg-accent/20 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 dark:bg-accent/20 rounded-full -ml-12 -mb-12 blur-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplyNow;