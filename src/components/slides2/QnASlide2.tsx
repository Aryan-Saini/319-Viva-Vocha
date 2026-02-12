import { motion } from 'framer-motion';
import type { Slide2 } from '../../data/slides2';
import './SlideStyles2.css';

interface QnASlide2Props {
  slide: Slide2;
}

const QnASlide2 = ({ slide }: QnASlide2Props) => {
  const { content } = slide;

  return (
    <motion.div 
      className="slide2 slide2-qna"
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

      {content.qnaItems && (
        <div className="qna2-grid">
          {content.qnaItems.map((item, index) => (
            <motion.div
              key={index}
              className="qna2-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <div className="qna2-question">
                <span className="qna2-q-icon">Q</span>
                <span className="qna2-q-text">{item.question}</span>
              </div>
              <div className="qna2-answer">
                <span className="qna2-a-icon">A</span>
                <span className="qna2-a-text">{item.answer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default QnASlide2;
