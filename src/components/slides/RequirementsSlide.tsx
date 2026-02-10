import { motion } from 'framer-motion';
import type { Slide } from '../../data/slides';
import './SlideStyles.css';

interface RequirementsSlideProps {
  slide: Slide;
}

const RequirementsSlide = ({ slide }: RequirementsSlideProps) => {
  const { content } = slide;

  return (
    <motion.div 
      className="slide slide-requirements"
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

      {content.sections && (
        <div className="requirements-grid">
          {content.sections.map((section, index) => (
            <motion.div
              key={index}
              className="requirement-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="req-header">
                <span className="req-number">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="req-title">{section.title}</h3>
              </div>
              <ul className="req-items">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      )}

      {content.requirements && (
        <div className="func-requirements-grid">
          {content.requirements.map((req, index) => (
            <motion.div
              key={index}
              className="func-req-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="func-req-header">
                <span className="func-req-icon">◆</span>
                <h3 className="func-req-name">{req.name}</h3>
              </div>
              <p className="func-req-desc">{req.description}</p>
            </motion.div>
          ))}
        </div>
      )}

      {content.items && !content.sections && !content.requirements && (
        <div className="simple-items-grid">
          {content.items.map((item, index) => (
            <motion.div
              key={index}
              className="simple-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <span className="simple-item-marker">▸</span>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default RequirementsSlide;
