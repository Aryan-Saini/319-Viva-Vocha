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

  const glowVariantsMagenta = {
    animate: {
      boxShadow: [
        '0 0 20px rgba(196, 122, 158, 0.2)',
        '0 0 40px rgba(196, 122, 158, 0.4)',
        '0 0 20px rgba(196, 122, 158, 0.2)'
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
            <p className="logo-tagline">CPSC 319 // GROUP B // PRESENTATIONS</p>
          </div>
          <div className="header-accent-line" />
        </motion.header>

        {/* Presentations Grid */}
        <motion.div className="presentations-grid" variants={itemVariants}>
          {/* Requirements Presentation Card */}
          <motion.div 
            className="main-card"
            variants={itemVariants}
          >
            <div className="card-corner card-corner-tl" />
            <div className="card-corner card-corner-tr" />
            <div className="card-corner card-corner-bl" />
            <div className="card-corner card-corner-br" />
            
            <div className="card-header">
              <span className="card-tag">PRESENTATION 1</span>
              <h3 className="card-title">Requirements Document</h3>
              <p className="card-subtitle">Project Requirements & Planning</p>
            </div>

            <div className="card-body">
              <p className="card-description">
                User personas, user stories, functional requirements, WBS, 
                project schedule, risk management, and scope definition.
              </p>

              <div className="card-stats">
                <div className="stat-mini">
                  <span className="stat-mini-value">33</span>
                  <span className="stat-mini-label">Slides</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-mini-value">4</span>
                  <span className="stat-mini-label">Personas</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-mini-value">15+</span>
                  <span className="stat-mini-label">Requirements</span>
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

          {/* Design Presentation Card */}
          <motion.div 
            className="main-card main-card-magenta"
            variants={itemVariants}
          >
            <div className="card-corner card-corner-tl card-corner-magenta" />
            <div className="card-corner card-corner-tr card-corner-magenta" />
            <div className="card-corner card-corner-bl card-corner-magenta" />
            <div className="card-corner card-corner-br card-corner-magenta" />
            
            <div className="card-header">
              <span className="card-tag card-tag-magenta">PRESENTATION 2</span>
              <h3 className="card-title">Design Report</h3>
              <p className="card-subtitle card-subtitle-magenta">Technical Architecture & Design</p>
            </div>

            <div className="card-body">
              <p className="card-description">
                Technical stack, design decisions, UI/UX mockups, API routes, 
                database architecture, and system design rationale.
              </p>

              <div className="card-stats">
                <div className="stat-mini">
                  <span className="stat-mini-value">31</span>
                  <span className="stat-mini-label">Slides</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-mini-value">6</span>
                  <span className="stat-mini-label">Decisions</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-mini-value">10+</span>
                  <span className="stat-mini-label">Technologies</span>
                </div>
              </div>
            </div>

            <motion.button 
              className="launch-button launch-button-magenta"
              onClick={() => navigate('/presentation2/1')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={glowVariantsMagenta}
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
