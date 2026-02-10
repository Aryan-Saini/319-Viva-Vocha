import { motion } from 'framer-motion';
import type { Slide } from '../../data/slides';
import './SlideStyles.css';

interface RiskSlideProps {
  slide: Slide;
}

const RiskSlide = ({ slide }: RiskSlideProps) => {
  const { content } = slide;

  const getProbabilityColor = (prob: string) => {
    switch (prob) {
      case 'Low': return 'green';
      case 'Medium': return 'yellow';
      case 'High': return 'magenta';
      default: return 'cyan';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Low': return 'green';
      case 'Medium': return 'yellow';
      case 'High': return 'magenta';
      default: return 'cyan';
    }
  };

  return (
    <motion.div 
      className="slide slide-risk"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h2 
        className="slide-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {slide.title}
      </motion.h2>

      {content.risks && (
        <div className="risk-table-container">
          <div className="risk-table">
            <div className="risk-header">
              <span className="risk-col risk-col-name">Risk</span>
              <span className="risk-col risk-col-prob">Probability</span>
              <span className="risk-col risk-col-impact">Impact</span>
              <span className="risk-col risk-col-mitigation">Mitigation</span>
            </div>
            {content.risks.map((risk, index) => (
              <motion.div
                key={index}
                className="risk-row"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <span className="risk-col risk-col-name">{risk.risk}</span>
                <span className={`risk-col risk-col-prob risk-badge risk-badge-${getProbabilityColor(risk.probability)}`}>
                  {risk.probability}
                </span>
                <span className={`risk-col risk-col-impact risk-badge risk-badge-${getImpactColor(risk.impact)}`}>
                  {risk.impact}
                </span>
                <span className="risk-col risk-col-mitigation">{risk.mitigation}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default RiskSlide;
