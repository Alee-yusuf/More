import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart2, Users, Globe, Clock, Settings, 
  ChevronDown, Plus, Calendar, MapPin, Filter,
  ArrowUp, ArrowDown, DollarSign, Bell,
  Search, Menu, X, Grid, List, User
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, AreaChart, Area,
  PieChart, Pie, Cell, Bar, BarChart
} from 'recharts';

const Dashboard = () => {
  // States
  const [activeView, setActiveView] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState('7d');
  const [loading, setLoading] = useState(true);

  const mockData = {
    stats: {
      totalApplications: 1234,
      activeJobs: 45,
      totalViews: 25678,
      conversionRate: 3.2
    },
    recentActivity: [
      { id: 1, type: 'application', title: 'New application for Senior Developer', time: '2h ago' },
      { id: 2, type: 'job', title: 'New job posted: UI/UX Designer', time: '4h ago' },
      { id: 3, type: 'interview', title: 'Interview scheduled with John Doe', time: '1d ago' }
    ],
    chartData: Array.from({ length: 12 }, (_, i) => ({
      month: `Month ${i + 1}`,
      applications: Math.floor(Math.random() * 100),
      interviews: Math.floor(Math.random() * 50),
      hires: Math.floor(Math.random() * 10)
    }))
  };

  // Simulated loading effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const SidebarLink = ({ icon: Icon, text, active }) => (
    <button
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
        active ? 'bg-accent/10 text-accent' : 'hover:bg-muted-light/10 dark:hover:bg-accent/10'
      }`}
      onClick={() => setActiveView(text.toLowerCase())}
    >
      <Icon size={20} />
      <span>{text}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-background-light dark:bg-primary transition-colors duration-200 pt-14">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-primary border-r transition-transform duration-200 transform pt-14 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-8 px-2 space-y-1">
          <SidebarLink icon={Grid} text="Overview" active={activeView === 'overview'} />
          <SidebarLink icon={BarChart2} text="Analytics" active={activeView === 'analytics'} />
          <SidebarLink icon={Users} text="Applications" active={activeView === 'applications'} />
          <SidebarLink icon={Calendar} text="Schedule" active={activeView === 'schedule'} />
          <SidebarLink icon={Settings} text="Settings" active={activeView === 'settings'} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-200 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Header */}
        <header className="bg-white dark:bg-primary border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-muted-light/10 dark:hover:bg-accent/10">
              <Menu size={24} />
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
              
              <button 
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 rounded-lg hover:bg-muted-light/10 dark:hover:bg-accent/10 relative"
              >
                <Bell size={24} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <button 
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted-light/10 dark:hover:bg-accent/10"
              >
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white">
                  <User size={20} />
                </div>
                <span>Admin</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          {loading ? (
            <div className="flex items-center justify-center h-[calc(100vh-150px)]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-primary p-6 rounded-xl shadow-sm"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 dark:text-gray-300">Total Applications</p>
                        <h3 className="text-2xl font-bold mt-2">{mockData.stats.totalApplications}</h3>
                        <p className="text-green-500 flex items-center mt-2">
                          <ArrowUp size={16} className="mr-1" />
                          12.5%
                        </p>
                      </div>
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Users size={24} className="text-accent" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-primary p-6 rounded-xl shadow-sm"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 dark:text-gray-300">Active Jobs</p>
                        <h3 className="text-2xl font-bold mt-2">{mockData.stats.activeJobs}</h3>
                        <p className="text-red-500 flex items-center mt-2">
                          <ArrowDown size={16} className="mr-1" />
                          3.2%
                        </p>
                      </div>
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <BarChart2 size={24} className="text-accent" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-primary p-6 rounded-xl shadow-sm"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 dark:text-gray-300">Total Views</p>
                        <h3 className="text-2xl font-bold mt-2">{mockData.stats.totalViews}</h3>
                        <p className="text-green-500 flex items-center mt-2">
                          <ArrowUp size={16} className="mr-1" />
                          8.1%
                        </p>
                      </div>
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Globe size={24} className="text-accent" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-primary p-6 rounded-xl shadow-sm"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 dark:text-gray-300">Conversion Rate</p>
                        <h3 className="text-2xl font-bold mt-2">{mockData.stats.conversionRate}%</h3>
                        <p className="text-green-500 flex items-center mt-2">
                          <ArrowUp size={16} className="mr-1" />
                          1.2%
                        </p>
                      </div>
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <DollarSign size={24} className="text-accent" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white dark:bg-primary p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Applications Overview</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={mockData.chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="applications" stroke="#3b82f6" fill="#93c5fd" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-primary p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Hiring Pipeline</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={mockData.chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="interviews" fill="#818cf8" />
                          <Bar dataKey="hires" fill="#34d399" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-primary rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {mockData.recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between p-4 bg-muted-light/10 dark:bg-accent/10 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className={`p-2 rounded-lg ${
                            activity.type === 'application' ? 'bg-accent/20 text-accent' :
                            activity.type === 'job' ? 'bg-accent/20 text-accent' :
                            'bg-accent/20 text-accent'
                          }`}>
                            {activity.type === 'application' ? <Users size={20} /> :
                             activity.type === 'job' ? <BarChart2 size={20} /> :
                             <Calendar size={20} />}
                          </div>
                          <div>
                            <p className="font-medium">{activity.title}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-300">{activity.time}</p>
                          </div>
                        </div>
                        <button className="text-accent hover:text-accent/80">View</button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </main>

      {/* Notifications Dropdown */}
      <AnimatePresence>
        {notificationsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 right-24 w-80 bg-white dark:bg-primary rounded-xl shadow-lg border"
          >
            <div className="p-4 border-b border-muted-light/20 dark:border-accent/20">
              <h3 className="font-semibold">Notifications</h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 border-b border-muted-light/20 dark:border-accent/20 hover:bg-muted-light/10 dark:hover:bg-accent/10">
                  <p className="font-medium">New application received</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">2 hours ago</p>
                </div>
              ))}
            </div>
            <div className="p-4">
              <button className="text-accent hover:text-accent/80 text-sm">
                View all notifications
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Dropdown */}
      <AnimatePresence>
        {profileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 right-6 w-48 bg-white dark:bg-primary rounded-xl shadow-lg border"
          >
            <div className="p-2 space-y-1">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted-light/10 dark:hover:bg-accent/10">
                Profile Settings
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted-light/10 dark:hover:bg-accent/10">
                Help Center
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted-light/10 dark:hover:bg-accent/10 text-red-500">
                Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;