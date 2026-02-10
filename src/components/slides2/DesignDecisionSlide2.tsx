import { motion } from 'framer-motion';
import type { Slide2 } from '../../data/slides2';
import './SlideStyles2.css';

interface DesignDecisionSlide2Props {
  slide: Slide2;
}

const DesignDecisionSlide2 = ({ slide }: DesignDecisionSlide2Props) => {
  const { content } = slide;
  const decision = content.decision;

  if (!decision) return null;

  return (
    <motion.div 
      className="slide2 slide2-design-decision"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h2 
        className="slide2-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {slide.title}
      </motion.h2>

      <div className="decision2-container">
        {/* Decision Badge */}
        <motion.div 
          className="decision2-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="decision2-label">DECISION</span>
          <span className="decision2-value">{decision.decision}</span>
        </motion.div>

        {/* Rationale */}
        <motion.div 
          className="decision2-rationale"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Rationale
          </h3>
          <ul>
            {decision.rationale.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Tradeoffs */}
        <div className="decision2-tradeoffs">
          <motion.div 
            className="decision2-lost"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              Trade-offs Lost
            </h3>
            <ul>
              {decision.tradeoffs.lost.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="decision2-gained"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="16 12 12 8 8 12" />
                <line x1="12" y1="16" x2="12" y2="8" />
              </svg>
              Trade-offs Gained
            </h3>
            <ul>
              {decision.tradeoffs.gained.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DesignDecisionSlide2;
