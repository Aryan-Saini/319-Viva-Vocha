import { motion } from 'framer-motion';
import type { Slide3 } from '../../data/slides3';
import './SlideStyles3.css';

interface TestStrategySlide3Props {
  slide: Slide3;
}

const TestStrategySlide3 = ({ slide }: TestStrategySlide3Props) => {
  const { content } = slide;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const getStatusClass = (status?: string) => {
    switch (status) {
      case 'automated':
        return 'status-automated';
      case 'manual':
        return 'status-manual';
      case 'planned':
        return 'status-planned';
      default:
        return '';
    }
  };

  return (
    <motion.div 
      className="slide3 slide3-test-strategy"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="slide3-heading">{slide.title}</h2>
      
      <div className="test-strategy3-grid">
        {content.testStrategy?.map((strategy, index) => (
          <motion.div 
            key={index}
            className="test-strategy3-item"
            variants={itemVariants}
          >
            <div className="test-strategy3-content">
              <div className="test-strategy3-type">{strategy.type}</div>
              <div className="test-strategy3-description">{strategy.description}</div>
              <div className="test-strategy3-execution">{strategy.execution}</div>
            </div>
            {strategy.status && (
              <div className={`test-strategy3-status ${getStatusClass(strategy.status)}`}>
                {strategy.status}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TestStrategySlide3;