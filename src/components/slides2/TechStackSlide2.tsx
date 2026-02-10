import { motion } from 'framer-motion';
import type { Slide2 } from '../../data/slides2';
import './SlideStyles2.css';

interface TechStackSlide2Props {
  slide: Slide2;
}

const TechStackSlide2 = ({ slide }: TechStackSlide2Props) => {
  const { content } = slide;

  const layerColors: Record<string, string> = {
    'Frontend/Backend': 'cyan',
    'Frontend': 'magenta',
    'Backend': 'yellow',
    'Testing': 'green',
    'Database': 'orange',
    'Storage': 'purple',
    'Hosting': 'blue'
  };

  return (
    <motion.div 
      className="slide2 slide2-tech-stack"
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

      {content.techStack && (
        <div className="tech-stack2-container">
          <div className="tech-stack2-grid">
            {content.techStack.map((item, index) => (
              <motion.div
                key={index}
                className={`tech-stack2-item tech-stack2-${layerColors[item.layer] || 'cyan'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <div className="tech-stack2-layer">{item.layer}</div>
                <div className="tech-stack2-tech">{item.technology}</div>
                <div className="tech-stack2-purpose">{item.purpose}</div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TechStackSlide2;
