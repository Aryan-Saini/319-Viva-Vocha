import { motion } from 'framer-motion';
import type { Slide3 } from '../../data/slides3';
import './SlideStyles3.css';

interface TestCoverageSlide3Props {
  slide: Slide3;
}

const TestCoverageSlide3 = ({ slide }: TestCoverageSlide3Props) => {
  const { content } = slide;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Check if we have testCoverage array or sections array
  if (content.testCoverage) {
    return (
      <motion.div 
        className="slide3 slide3-test-coverage"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="slide3-heading">{slide.title}</h2>
        
        <div className="test-coverage3-grid">
          {content.testCoverage.map((coverage, index) => (
            <motion.div 
              key={index}
              className="test-coverage3-item"
              variants={itemVariants}
            >
              <div className="test-coverage3-header">
                <div className="test-coverage3-feature">{coverage.feature}</div>
                <div className="test-coverage3-type">{coverage.testType}</div>
              </div>
              
              <div className="test-coverage3-coverage">{coverage.coverage}</div>
              
              {coverage.gaps && coverage.gaps.length > 0 && (
                <div className="test-coverage3-gaps">
                  <h4>Gaps Identified:</h4>
                  <ul>
                    {coverage.gaps.map((gap, gapIndex) => (
                      <li key={gapIndex}>{gap}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {coverage.evidence && (
                <div className="test-coverage3-evidence">
                  Evidence: {coverage.evidence}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  // Fallback to sections format for other test coverage slides
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
            variants={itemVariants}
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

export default TestCoverageSlide3;