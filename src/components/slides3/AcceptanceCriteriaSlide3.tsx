import { motion } from 'framer-motion';
import type { Slide3 } from '../../data/slides3';
import './SlideStyles3.css';

interface AcceptanceCriteriaSlide3Props {
  slide: Slide3;
}

const AcceptanceCriteriaSlide3 = ({ slide }: AcceptanceCriteriaSlide3Props) => {
  const { content } = slide;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'met':
        return 'status-met';
      case 'partial':
        return 'status-partial';
      case 'not-met':
        return 'status-not-met';
      default:
        return '';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'met':
        return '✓ MET';
      case 'partial':
        return '◐ PARTIAL';
      case 'not-met':
        return '✗ NOT MET';
      default:
        return status.toUpperCase();
    }
  };

  return (
    <motion.div 
      className="slide3 slide3-acceptance-criteria"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="slide3-heading">{slide.title}</h2>
      
      <div className="acceptance3-grid">
        {content.acceptanceCriteria?.map((criterion, index) => (
          <motion.div 
            key={index}
            className="acceptance3-item"
            variants={itemVariants}
          >
            <div className="acceptance3-header">
              <div className="acceptance3-feature">{criterion.feature}</div>
              <div className={`acceptance3-status ${getStatusClass(criterion.status)}`}>
                {getStatusLabel(criterion.status)}
              </div>
            </div>
            
            <div className="acceptance3-criteria">{criterion.criteria}</div>
            
            <div className="acceptance3-details">
              {criterion.evidence && (
                <div className="acceptance3-evidence">
                  <strong>Evidence:</strong> {criterion.evidence}
                </div>
              )}
              
              {criterion.missing && (
                <div className="acceptance3-missing">
                  <strong>Missing:</strong> {criterion.missing}
                </div>
              )}
              
              {criterion.plan && (
                <div className="acceptance3-plan">
                  <strong>Plan:</strong> {criterion.plan}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AcceptanceCriteriaSlide3;