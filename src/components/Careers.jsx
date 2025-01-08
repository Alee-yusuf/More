import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, MapPin, Clock, X as CloseIcon, 
  ChevronRight, Search, Filter, Send 
} from 'lucide-react';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Senior Business Consultant',
      location: 'New York',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$90,000 - $120,000',
      description: 'We are seeking an experienced business consultant to join our strategic consulting team.',
      responsibilities: [
        'Lead client engagements and deliver strategic solutions',
        'Conduct market analysis and research',
        'Develop business strategies and implementation plans',
        'Present findings and recommendations to clients'
      ],
      requirements: [
        'MBA or equivalent advanced degree',
        'Proven consulting experience',
        'Strong analytical and problem-solving skills',
        'Excellent communication and presentation abilities'
      ]
    },
    {
      id: 2,
      title: 'Digital Transformation Specialist',
      location: 'Remote',
      type: 'Contract',
      experience: '3+ years',
      salary: '$80,000 - $100,000',
      description: 'Join our digital transformation team to help clients navigate their digital journey.',
      responsibilities: [
        'Assess client digital maturity and needs',
        'Design digital transformation roadmaps',
        'Implement digital solutions and strategies',
        'Monitor and optimize digital initiatives'
      ],
      requirements: [
        'Bachelors degree in relevant field',
        'Experience in digital transformation projects',
        'Knowledge of current digital trends',
        'Project management skills'
      ]
    },
    {
      id: 3,
      title: 'Financial Analyst',
      location: 'London',
      type: 'Full-time',
      experience: '2+ years',
      salary: '£45,000 - £60,000',
      description: 'Looking for a detail-oriented financial analyst to join our growing team.',
      responsibilities: [
        'Conduct financial analysis and modeling',
        'Prepare financial reports and forecasts',
        'Support client financial strategy development',
        'Perform market research and analysis'
      ],
      requirements: [
        'Finance or Accounting degree',
        'Financial modeling experience',
        'Advanced Excel skills',
        'Strong analytical mindset'
      ]
    }
  ];

  const locations = ['All', 'New York', 'London', 'Remote'];
  const types = ['All', 'Full-time', 'Part-time', 'Contract'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    const matchesType = selectedType === 'All' || job.type === selectedType;
    return matchesSearch && matchesLocation && matchesType;
  });

  const JobModal = ({ job, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-background-light dark:bg-primary w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-float dark:shadow-float-dark"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-accent/10 rounded-full transition-colors duration-200"
          >
            <CloseIcon className="w-6 h-6 text-accent" />
          </button>

          <h3 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
            {job.title}
          </h3>

          <div className="flex flex-wrap gap-4 mb-6">
            <span className="flex items-center gap-2 text-muted-light dark:text-text-dark/80">
              <MapPin className="w-4 h-4 text-accent" />
              {job.location}
            </span>
            <span className="flex items-center gap-2 text-muted-light dark:text-text-dark/80">
              <Clock className="w-4 h-4 text-accent" />
              {job.type}
            </span>
            <span className="flex items-center gap-2 text-muted-light dark:text-text-dark/80">
              <Briefcase className="w-4 h-4 text-accent" />
              {job.experience}
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                Description
              </h4>
              <p className="text-muted-light dark:text-text-dark/80">
                {job.description}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                Responsibilities
              </h4>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-muted-light dark:text-text-dark/80"
                  >
                    <ChevronRight className="w-4 h-4 text-accent" />
                    {resp}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                Requirements
              </h4>
              <ul className="space-y-2">
                {job.requirements.map((req, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-muted-light dark:text-text-dark/80"
                  >
                    <ChevronRight className="w-4 h-4 text-accent" />
                    {req}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-accent hover:bg-accent-dark text-white rounded-xl mt-6 flex items-center justify-center gap-2 transition-colors duration-200 shadow-glow dark:shadow-glow-dark"
              onClick={() => setIsFormVisible(true)}
            >
              <Send className="w-5 h-5" />
              Apply Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const ApplyForm = ({ job, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-background-light dark:bg-primary w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-float dark:shadow-float-dark"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-accent/10 rounded-full transition-colors duration-200"
          >
            <CloseIcon className="w-6 h-6 text-accent" />
          </button>

          <h3 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
            Apply for {job.title}
          </h3>

          <form className="space-y-6">
            <div>
              <label className="block text-text-light dark:text-text-dark mb-2">Name</label>
              <input type="text" className="w-full p-3 bg-accent/5 dark:bg-accent/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200" />
            </div>
            <div>
              <label className="block text-text-light dark:text-text-dark mb-2">Email</label>
              <input type="email" className="w-full p-3 bg-accent/5 dark:bg-accent/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200" />
            </div>
            <div>
              <label className="block text-text-light dark:text-text-dark mb-2">Resume</label>
              <input type="file" className="w-full p-3 bg-accent/5 dark:bg-accent/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200" />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-accent hover:bg-accent-dark text-white rounded-xl mt-6 flex items-center justify-center gap-2 transition-colors duration-200 shadow-glow dark:shadow-glow-dark"
            >
              Submit Application
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="career" className="min-h-screen bg-background-light dark:bg-primary py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-text-light dark:text-text-dark mb-4">
            Career <span className="text-accent">Opportunities</span>
          </h2>
          <p className="text-muted-light dark:text-text-dark/80 text-lg max-w-2xl mx-auto">
            Join our team of experts and make a difference in the world of consulting
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5" />
              <input
                type="text"
                placeholder="Search positions..."
                className="w-full pl-10 pr-4 py-3 bg-accent/5 dark:bg-accent/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-3 bg-accent/5 dark:bg-accent/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 appearance-none"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-3 bg-accent/5 dark:bg-accent/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 appearance-none"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-6">
            {filteredJobs.map(job => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-accent/5 dark:bg-accent/10 rounded-2xl shadow-float dark:shadow-float-dark hover:shadow-glow dark:hover:shadow-glow-dark transition-all duration-300"
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        <span className="flex items-center gap-2 text-muted-light dark:text-text-dark/80">
                          <MapPin className="w-4 h-4 text-accent" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-2 text-muted-light dark:text-text-dark/80">
                          <Clock className="w-4 h-4 text-accent" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-2 text-muted-light dark:text-text-dark/80">
                          <Briefcase className="w-4 h-4 text-accent" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-accent hover:bg-accent-dark text-white rounded-xl flex items-center gap-2 transition-colors duration-200 shadow-glow dark:shadow-glow-dark"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedJob && (
          <JobModal
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
          />
        )}
        {isFormVisible && selectedJob && (
          <ApplyForm
            job={selectedJob}
            onClose={() => setIsFormVisible(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Careers;
