import { motion } from 'framer-motion';
import type { Slide3 } from '../../data/slides3';
import './SlideStyles3.css';

interface TOCSlide3Props {
  slide: Slide3;
}

const TOCSlide3 = ({ slide }: TOCSlide3Props) => {
  const { content } = slide;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className="slide3 slide3-toc"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="slide3-heading">{slide.title}</h2>
      
      <div className="toc3-grid">
        {content.items?.map((item, index) => (
          <motion.div 
            key={index}
            className="toc3-item"
            variants={itemVariants}
            whileHover={{ scale: 1.02, x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="toc3-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="toc3-text">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TOCSlide3;