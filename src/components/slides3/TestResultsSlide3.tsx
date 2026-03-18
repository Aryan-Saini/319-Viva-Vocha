import { motion } from 'framer-motion';
import type { Slide3 } from '../../data/slides3';
import './SlideStyles3.css';

interface TestResultsSlide3Props {
  slide: Slide3;
}

const TestResultsSlide3 = ({ slide }: TestResultsSlide3Props) => {
  const { content } = slide;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Check if we have testResults array or sections array
  if (content.testResults) {
    return (
      <motion.div 
        className="slide3 slide3-test-results"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="slide3-heading">{slide.title}</h2>
        
        <div className="test-results3-grid">
          {content.testResults.map((result, index) => (
            <motion.div 
              key={index}
              className="test-results3-card"
              variants={cardVariants}
            >
              <div className="test-results3-header">
                <div className="test-results3-category">{result.category}</div>
                {result.resolved && (
                  <div className="test-results3-badge resolved">RESOLVED</div>
                )}
              </div>
              
              <div className="test-results3-metrics">
                <div className="metric3-item">
                  <span className="metric3-label">Total</span>
                  <span className="metric3-value">{result.totalIssues}</span>
                </div>
                {result.critical > 0 && (
                  <div className="metric3-item">
                    <span className="metric3-label">Critical</span>
                    <span className="metric3-value" style={{ color: 'var(--accent-red)' }}>
                      {result.critical}
                    </span>
                  </div>
                )}
                {result.major > 0 && (
                  <div className="metric3-item">
                    <span className="metric3-label">Major</span>
                    <span className="metric3-value" style={{ color: 'var(--accent-orange)' }}>
                      {result.major}
                    </span>
                  </div>
                )}
                {result.minor > 0 && (
                  <div className="metric3-item">
                    <span className="metric3-label">Minor</span>
                    <span className="metric3-value" style={{ color: 'var(--accent-yellow)' }}>
                      {result.minor}
                    </span>
                  </div>
                )}
              </div>
              
              {result.details && result.details.length > 0 && (
                <div className="test-results3-details">
                  <ul>
                    {result.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  // Fallback to sections format for other test results slides
  return (
    <motion.div 
      className="slide3 slide3-summary"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="slide3-heading">{slide.title}</h2>
      
      <div className="summary3-grid">
        {content.sections?.map((section, index) => (
          <motion.div 
            key={index}
            className="summary3-card"
            variants={cardVariants}
          >
            <h3 className="summary3-title">{section.title}</h3>
            <ul className="summary3-items">
              {section.items.map((item, itemIndex) => (
                <motion.li 
                  key={itemIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + itemIndex * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TestResultsSlide3;