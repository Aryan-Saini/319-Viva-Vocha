import { motion } from 'framer-motion';
import type { Slide3 } from '../../data/slides3';
import './SlideStyles3.css';

interface DesignDecisionSlide3Props {
  slide: Slide3;
}

const DesignDecisionSlide3 = ({ slide }: DesignDecisionSlide3Props) => {
  const { content } = slide;
  const decision = content.decision;

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

  if (!decision) return null;

  return (
    <motion.div 
      className="slide3 slide3-design-decision"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="slide3-heading">{slide.title}</h2>
      
      <div className="decision3-container">
        <motion.div className="decision3-badge" variants={itemVariants}>
          <div className="decision3-label">{decision.title}</div>
          <div className="decision3-value">{decision.decision}</div>
        </motion.div>

        <div className="decision3-grid">
          <motion.div className="decision3-rationale" variants={itemVariants}>
            <h3>Rationale</h3>
            <ul>
              {decision.rationale.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="decision3-lost" variants={itemVariants}>
            <h3>Trade-offs Lost</h3>
            <ul>
              {decision.tradeoffs.lost.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="decision3-gained" variants={itemVariants}>
            <h3>Trade-offs Gained</h3>
            <ul>
              {decision.tradeoffs.gained.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DesignDecisionSlide3;