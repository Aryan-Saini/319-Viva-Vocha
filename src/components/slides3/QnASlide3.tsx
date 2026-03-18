import { motion } from 'framer-motion';
import type { Slide3 } from '../../data/slides3';
import './SlideStyles3.css';

interface QnASlide3Props {
  slide: Slide3;
}

const QnASlide3 = ({ slide }: QnASlide3Props) => {
  const { content } = slide;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="slide3 slide3-qna"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="slide3-heading">{slide.title}</h2>
      
      <div className="qna3-grid">
        {content.qnaItems?.map((item, index) => (
          <motion.div 
            key={index}
            className="qna3-item"
            variants={itemVariants}
          >
            <div className="qna3-question">{item.question}</div>
            <div className="qna3-answer">{item.answer}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default QnASlide3;