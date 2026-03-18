import { motion } from 'framer-motion';
import type { Slide3 } from '../../data/slides3';
import './SlideStyles3.css';

interface SummarySlide3Props {
  slide: Slide3;
}

const SummarySlide3 = ({ slide }: SummarySlide3Props) => {
  const { content } = slide;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="slide3 slide3-summary"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="slide3-heading">{slide.title}</h2>
      
      <div className="summary3-grid">
        {content.sections?.map((section, index) => (
          <motion.div 
            key={index}
            className="summary3-card"
            variants={cardVariants}
          >
            <h3 className="summary3-title">{section.title}</h3>
            <ul className="summary3-items">
              {section.items.map((item, itemIndex) => (
                <motion.li 
                  key={itemIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + itemIndex * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SummarySlide3;