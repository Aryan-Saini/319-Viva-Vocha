import { motion } from 'framer-motion';
import type { Slide2 } from '../../data/slides2';
import './SlideStyles2.css';

interface TOCSlide2Props {
  slide: Slide2;
}

const TOCSlide2 = ({ slide }: TOCSlide2Props) => {
  const { content } = slide;

  return (
    <motion.div 
      className="slide2 slide2-toc"
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

      {content.items && (
        <div className="toc2-container">
          <div className="toc2-grid">
            {content.items.map((item, index) => (
              <motion.div
                key={index}
                className="toc2-item"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                <span className="toc2-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="toc2-text">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TOCSlide2;
