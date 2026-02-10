import { motion } from 'framer-motion';
import type { Slide } from '../../data/slides';
import './SlideStyles.css';

interface PerformanceSlideProps {
  slide: Slide;
}

const PerformanceSlide = ({ slide }: PerformanceSlideProps) => {
  const { content } = slide;

  return (
    <motion.div 
      className="slide slide-performance"
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

      <div className="performance-content">
        {content.metrics && (
          <div className="metrics-grid">
            {content.metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="metric-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.15 }}
              >
                <div className="metric-value-container">
                  <span className="metric-value">{metric.value}</span>
                </div>
                <h3 className="metric-label">{metric.label}</h3>
                <p className="metric-description">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        )}

        {content.items && (
          <motion.div 
            className="usability-items"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="usability-title">Core Tasks</h3>
            <div className="usability-grid">
              {content.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="usability-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <span className="usability-marker">◆</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default PerformanceSlide;
