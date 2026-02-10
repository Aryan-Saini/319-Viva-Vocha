import { motion } from 'framer-motion';
import type { Slide2 } from '../../data/slides2';
import './SlideStyles2.css';

interface APIRoutesSlide2Props {
  slide: Slide2;
}

const APIRoutesSlide2 = ({ slide }: APIRoutesSlide2Props) => {
  const { content } = slide;

  return (
    <motion.div 
      className="slide2 slide2-api-routes"
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

      {content.sections && (
        <div className="api-routes2-container">
          {content.sections.map((section, index) => (
            <motion.div
              key={index}
              className="api-routes2-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <h3 className="api-routes2-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {section.title}
              </h3>
              <ul className="api-routes2-list">
                {section.items.map((item, i) => {
                  const parts = item.split(' - ');
                  const route = parts[0];
                  const desc = parts[1] || '';
                  const method = route.split(' ')[0];
                  const path = route.split(' ').slice(1).join(' ');
                  
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                    >
                      <span className={`api-method api-method-${method.toLowerCase()}`}>
                        {method}
                      </span>
                      <code className="api-path">{path}</code>
                      {desc && <span className="api-desc">{desc}</span>}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default APIRoutesSlide2;
