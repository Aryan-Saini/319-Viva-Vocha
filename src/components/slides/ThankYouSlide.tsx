import { motion } from 'framer-motion';
import type { Slide } from '../../data/slides';
import './SlideStyles.css';

interface ThankYouSlideProps {
  slide: Slide;
}

const ThankYouSlide = ({ slide }: ThankYouSlideProps) => {
  return (
    <motion.div 
      className="slide slide-thankyou"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="thankyou-decoration">
        <div className="deco-line deco-line-1" />
        <div className="deco-line deco-line-2" />
      </div>

      <motion.div 
        className="thankyou-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.h1 
          className="thankyou-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {slide.title}
        </motion.h1>
        
        <motion.p 
          className="thankyou-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {slide.content.subtitle}
        </motion.p>

        <motion.div 
          className="thankyou-team"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="team-label">GROUP B // CPSC 319</span>
        </motion.div>
      </motion.div>

      <motion.div 
        className="thankyou-glow"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.div>
  );
};

export default ThankYouSlide;
