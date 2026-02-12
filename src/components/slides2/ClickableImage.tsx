import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ClickableImage.css';

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

const ClickableImage = ({ src, alt, className, onError }: ClickableImageProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => setIsFullscreen(true);
  const closeFullscreen = () => setIsFullscreen(false);

  // Handle ESC key to close fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        closeFullscreen();
      }
    };

    if (isFullscreen) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when fullscreen is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  return (
    <>
      <img 
        src={src} 
        alt={alt}
        className={`clickable-image ${className || ''}`}
        onClick={openFullscreen}
        onError={onError}
      />
      
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            className="fullscreen-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeFullscreen}
          >
            <motion.img 
              src={src} 
              alt={alt}
              className="fullscreen-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <button className="fullscreen-close" onClick={closeFullscreen}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="fullscreen-hint">Click anywhere or press ESC to close</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ClickableImage;
