import { motion } from 'framer-motion';
import type { Slide } from '../../data/slides';
import './SlideStyles.css';

interface ScopeSlideProps {
  slide: Slide;
}

const ScopeSlide = ({ slide }: ScopeSlideProps) => {
  const { content } = slide;
  const isOutOfScope = slide.title.toLowerCase().includes('out');

  return (
    <motion.div
      className="slide slide-scope"
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

      {content.scopeItems && (
        <div className="scope-content">
          <motion.div
            className="scope-column"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ul className={`scope-list ${isOutOfScope ? 'scope-list-out' : 'scope-list-in'}`}>
              {content.scopeItems.left.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className={`scope-marker ${isOutOfScope ? 'scope-marker-out' : 'scope-marker-in'}`}>●</span>
                  <span className="scope-text">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="scope-column"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ul className={`scope-list ${isOutOfScope ? 'scope-list-out' : 'scope-list-in'}`}>
              {content.scopeItems.right.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className={`scope-marker ${isOutOfScope ? 'scope-marker-out' : 'scope-marker-in'}`}>●</span>
                  <span className="scope-text">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ScopeSlide;
