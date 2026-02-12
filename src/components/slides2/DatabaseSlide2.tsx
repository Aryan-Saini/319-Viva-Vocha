import { motion } from 'framer-motion';
import type { Slide2 } from '../../data/slides2';
import ClickableImage from './ClickableImage';
import { getSlide2ImageSrc } from '../../utils/slideImage';
import './SlideStyles2.css';

interface DatabaseSlide2Props {
  slide: Slide2;
}

const DatabaseSlide2 = ({ slide }: DatabaseSlide2Props) => {
  const { content } = slide;

  return (
    <motion.div 
      className="slide2 slide2-database"
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

      <div className="database2-container">
        {/* Left side - Image */}
        <motion.div 
          className="database2-image"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {content.imageSrc && (
            <ClickableImage 
              src={getSlide2ImageSrc(content.imageSrc)} 
              alt="Database Schema"
              scale={content.imageScale}
            />
          )}
          {!content.imageSrc && (
            <div className="database2-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
              <span>Database Schema</span>
            </div>
          )}
        </motion.div>

        {/* Right side - Details */}
        <div className="database2-details">
          {content.sections && content.sections.map((section, index) => (
            <motion.div
              key={index}
              className="database2-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
            >
              <h3>
                {index === 0 ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="6" y1="3" x2="6" y2="15" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M18 9a9 9 0 0 1-9 9" />
                  </svg>
                )}
                {section.title}
              </h3>
              <ul>
                {section.items.map((item, i) => (
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
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DatabaseSlide2;
