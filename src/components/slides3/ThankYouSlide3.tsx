import { motion } from 'framer-motion';
import type { Slide3 } from '../../data/slides3';
import './SlideStyles3.css';

interface ThankYouSlide3Props {
  slide: Slide3;
}

const ThankYouSlide3 = ({ slide }: ThankYouSlide3Props) => {
  const { content } = slide;

  return (
    <motion.div 
      className="slide3 slide3-thank-you"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="thank-you3-decoration">
        <div className="ty3-line ty3-line-1" />
        <div className="ty3-line ty3-line-2" />
        <div className="ty3-corner ty3-corner-tl" />
        <div className="ty3-corner ty3-corner-tr" />
        <div className="ty3-corner ty3-corner-bl" />
        <div className="ty3-corner ty3-corner-br" />
      </div>

      <motion.div 
        className="thank-you3-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="thank-you3-title">{slide.title}</h1>
        {content.subtitle && (
          <p className="thank-you3-subtitle">{content.subtitle}</p>
        )}
        <p className="thank-you3-footer">CPSC 319 // AUNT LEAH'S PLACE CMS // TEST PLAN</p>
      </motion.div>
    </motion.div>
  );
};

export default ThankYouSlide3;