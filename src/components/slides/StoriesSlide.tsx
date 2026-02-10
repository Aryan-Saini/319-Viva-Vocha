import { motion } from 'framer-motion';
import type { Slide } from '../../data/slides';
import './SlideStyles.css';

interface StoriesSlideProps {
  slide: Slide;
}

const StoriesSlide = ({ slide }: StoriesSlideProps) => {
  const { content } = slide;
  const colors = ['cyan', 'magenta', 'yellow', 'green', 'orange'];

  return (
    <motion.div 
      className="slide slide-stories"
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

      <div className="stories-grid">
        {content.items?.map((item, index) => (
          <motion.div
            key={index}
            className={`story-card story-card-${colors[index % colors.length]}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <span className="story-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="story-text">{item}</span>
            <div className="story-accent" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StoriesSlide;
