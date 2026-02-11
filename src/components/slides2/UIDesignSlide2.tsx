import { motion } from 'framer-motion';
import type { Slide2 } from '../../data/slides2';
import ClickableImage from './ClickableImage';
import { getSlide2ImageSrc } from '../../utils/slideImage';
import './SlideStyles2.css';

interface UIDesignSlide2Props {
  slide: Slide2;
}

const UIDesignSlide2 = ({ slide }: UIDesignSlide2Props) => {
  const { content } = slide;
  const uiPage = content.uiPage;

  if (!uiPage) return null;

  return (
    <motion.div 
      className="slide2 slide2-ui-design"
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

      <div className="ui-design2-container">
        {/* Left side - Image */}
        <motion.div 
          className="ui-design2-image"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {content.imageSrc && (
            <ClickableImage 
              src={getSlide2ImageSrc(content.imageSrc)} 
              alt={uiPage.name}
            />
          )}
          {!content.imageSrc && (
            <div className="ui-design2-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span>UI Mockup</span>
            </div>
          )}
        </motion.div>

        {/* Right side - Details */}
        <div className="ui-design2-details">
          <motion.div 
            className="ui-design2-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p>{uiPage.description}</p>
          </motion.div>

          <motion.div 
            className="ui-design2-features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              Key Features
            </h3>
            <ul>
              {uiPage.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="ui-design2-api"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              API Calls
            </h3>
            <ul className="api-calls-list">
              {uiPage.apiCalls.map((call, i) => (
                <li key={i}>
                  <code>{call}</code>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UIDesignSlide2;
