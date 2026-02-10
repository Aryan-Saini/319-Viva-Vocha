import { motion } from 'framer-motion';
import type { Slide2 } from '../../data/slides2';
import './SlideStyles2.css';

interface ReferencesSlide2Props {
  slide: Slide2;
}

const ReferencesSlide2 = ({ slide }: ReferencesSlide2Props) => {
  const { content } = slide;

  return (
    <motion.div 
      className="slide2 slide2-references"
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

      {content.references && (
        <div className="references2-container">
          <div className="references2-grid">
            {content.references.map((ref, index) => (
              <motion.div
                key={index}
                className="references2-item"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.03 }}
              >
                <span className="references2-number">[{ref.number}]</span>
                <span className="references2-text">{ref.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ReferencesSlide2;
