import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { slides2 } from '../data/slides2';
import SlideRenderer2 from '../components/SlideRenderer2';
import '../components/slides2/Presentation2Theme.css';
import './PrintView2.css';

const PrintView2 = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Set document title for PDF filename
    document.title = 'VivaVoice_Design_Presentation';
    
    // Wait for all content to render (longer delay to ensure everything loads)
    const readyTimer = setTimeout(() => {
      setIsReady(true);
    }, 1500);
    
    return () => clearTimeout(readyTimer);
  }, []);

  useEffect(() => {
    if (isReady) {
      // Additional delay after ready state to ensure DOM is fully painted
      const printTimer = setTimeout(() => {
        window.print();
      }, 500);
      
      return () => clearTimeout(printTimer);
    }
  }, [isReady]);

  return (
    // Disable all Framer Motion animations for print view
    <MotionConfig reducedMotion="always">
      <div className="print-view presentation2-theme">
        {!isReady && (
          <div className="print-loading">
            <div className="print-loading-text">Preparing slides for print...</div>
          </div>
        )}
        {slides2.map((slide) => {
          // Appendix slides are 25-31 (after Thank You slide which is 24)
          const isAppendix = slide.id >= 25;
          return (
            <div key={slide.id} className={`print-slide ${isAppendix ? 'appendix-slide' : ''}`}>
              {isAppendix && (
                <div className="appendix-notch">
                  <span>APPENDIX</span>
                </div>
              )}
              <div className="print-slide-content">
                <SlideRenderer2 slide={slide} />
              </div>
              <div className="print-slide-number">{slide.id}</div>
            </div>
          );
        })}
      </div>
    </MotionConfig>
  );
};

export default PrintView2;
