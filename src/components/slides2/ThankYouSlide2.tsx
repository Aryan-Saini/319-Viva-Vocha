import { motion } from 'framer-motion';
import type { Slide2 } from '../../data/slides2';
import './SlideStyles2.css';

interface ThankYouSlide2Props {
  slide: Slide2;
}

const ThankYouSlide2 = ({ slide }: ThankYouSlide2Props) => {
  const { content } = slide;

  return (
    <motion.div 
      className="slide2 slide2-thank-you"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="thank-you2-decoration">
        <div className="ty2-line ty2-line-1" />
        <div className="ty2-line ty2-line-2" />
        <div className="ty2-corner ty2-corner-tl" />
        <div className="ty2-corner ty2-corner-tr" />
        <div className="ty2-corner ty2-corner-bl" />
        <div className="ty2-corner ty2-corner-br" />
      </div>

      <motion.div 
        className="thank-you2-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="thank-you2-title">{slide.title}</h1>
        {content.subtitle && (
          <p className="thank-you2-subtitle">{content.subtitle}</p>
        )}
        
        <motion.div 
          className="thank-you2-icon"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </motion.div>
      </motion.div>

      <motion.div 
        className="thank-you2-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <span>CPSC 319 // GROUP B // DESIGN PRESENTATION</span>
      </motion.div>
    </motion.div>
  );
};

export default ThankYouSlide2;
