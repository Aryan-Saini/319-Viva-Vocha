import { motion } from 'framer-motion';
import type { Slide2 } from '../../data/slides2';
import './SlideStyles2.css';

interface TechComparisonSlide2Props {
  slide: Slide2;
}

const TechComparisonSlide2 = ({ slide }: TechComparisonSlide2Props) => {
  const { content } = slide;
  const comparison = content.comparison;

  if (!comparison) return null;

  return (
    <motion.div 
      className="slide2 slide2-tech-comparison"
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

      <div className="comparison2-container">
        {/* Main Choice */}
        <motion.div 
          className="comparison2-main"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="comparison2-chosen-header">
            <span className="comparison2-badge">CHOSEN</span>
            <h3 className="comparison2-chosen-title">{comparison.chosen}</h3>
          </div>
          
          <div className="comparison2-pros-cons">
            <div className="comparison2-pros">
              <h4>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Pros
              </h4>
              <ul>
                {comparison.pros.map((pro, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    {pro}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {comparison.cons.length > 0 && (
              <div className="comparison2-cons">
                <h4>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  Cons
                </h4>
                <ul>
                  {comparison.cons.map((con, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                    >
                      {con}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>

        {/* Alternatives */}
        {comparison.alternatives.length > 0 && (
          <div className="comparison2-alternatives">
            <h4 className="comparison2-alt-header">Alternatives Considered</h4>
            <div className="comparison2-alt-grid">
              {comparison.alternatives.map((alt, index) => (
                <motion.div
                  key={index}
                  className="comparison2-alt-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <h5>{alt.name}</h5>
                  <div className="comparison2-alt-details">
                    <div className="alt-pros">
                      <span className="alt-label">+</span>
                      <ul>
                        {alt.pros.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </div>
                    <div className="alt-cons">
                      <span className="alt-label">−</span>
                      <ul>
                        {alt.cons.map((c, i) => <li key={i}>{c}</li>)}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TechComparisonSlide2;
