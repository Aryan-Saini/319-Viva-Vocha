import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        '0 0 20px rgba(0, 240, 255, 0.2)',
        '0 0 40px rgba(0, 240, 255, 0.4)',
        '0 0 20px rgba(0, 240, 255, 0.2)'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut' as const
      }
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-scanlines" />
      
      <motion.div 
        className="dashboard-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.header className="dashboard-header" variants={itemVariants}>
          <div className="header-accent-line" />
          <div className="header-content">
            <motion.div 
              className="logo-container"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <span className="logo-bracket">[</span>
              <h1 className="logo-text">ALL</h1>
              <span className="logo-bracket">]</span>
            </motion.div>
            <h2 className="logo-subtitle">VIVA VOCE</h2>
            <p className="logo-tagline">CPSC 319 // GROUP B // REQUIREMENTS PRESENTATION</p>
          </div>
          <div className="header-accent-line" />
        </motion.header>

        {/* Stats Grid */}
        <motion.div className="stats-grid" variants={itemVariants}>
          <div className="stat-box">
            <span className="stat-value">31</span>
            <span className="stat-label">SLIDES</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">5</span>
            <span className="stat-label">TEAM MEMBERS</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">4</span>
            <span className="stat-label">USER PERSONAS</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">15+</span>
            <span className="stat-label">REQUIREMENTS</span>
          </div>
        </motion.div>

        {/* Main Action Card */}
        <motion.div 
          className="main-card"
          variants={itemVariants}
        >
          <div className="card-corner card-corner-tl" />
          <div className="card-corner card-corner-tr" />
          <div className="card-corner card-corner-bl" />
          <div className="card-corner card-corner-br" />
          
          <div className="card-header">
            <span className="card-tag">PROJECT</span>
            <h3 className="card-title">Content Management System</h3>
            <p className="card-subtitle">For Aunt Leah's Place</p>
          </div>

          <div className="card-body">
            <p className="card-description">
              A comprehensive case management solution designed to help social workers 
              track client progress, manage case notes, and generate reports while 
              maintaining strict privacy and security compliance.
            </p>

            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span>Client Management</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <span>Case Notes</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <span>Analytics</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <span>Security</span>
              </div>
            </div>
          </div>

          <motion.button 
            className="launch-button"
            onClick={() => navigate('/presentation/1')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variants={glowVariants}
            animate="animate"
          >
            <span className="button-text">LAUNCH PRESENTATION</span>
            <span className="button-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </motion.button>
        </motion.div>

        {/* Team Section */}
        <motion.div className="team-section" variants={itemVariants}>
          <h4 className="section-title">
            <span className="title-line" />
            <span>TEAM ROSTER</span>
            <span className="title-line" />
          </h4>
          <div className="team-grid">
            {[
              { name: 'Shreyan Das', role: 'Project Manager', color: 'cyan' },
              { name: 'Aryan Saini', role: 'Client Liaison', color: 'magenta' },
              { name: 'Kyaw Min Oo', role: 'UX/Workflow', color: 'yellow' },
              { name: 'Michael Sam', role: 'QA Lead', color: 'green' },
              { name: 'David Falade', role: 'DevOps', color: 'orange' }
            ].map((member, index) => (
              <motion.div 
                key={member.name}
                className={`team-card team-card-${member.color}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="team-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="team-info">
                  <span className="team-name">{member.name}</span>
                  <span className="team-role">{member.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer className="dashboard-footer" variants={itemVariants}>
          <div className="footer-line" />
          <p className="footer-text">CPSC 319 // UNIVERSITY OF BRITISH COLUMBIA // 2025</p>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default Dashboard;
