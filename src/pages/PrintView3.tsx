import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { slides3 } from '../data/slides3';
import SlideRenderer3 from '../components/SlideRenderer3';
import '../components/slides3/Presentation3Theme.css';
import './PrintView3.css';

const PrintView3 = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.title = 'VivaVoice_Test_Plan_Presentation';
    
    const readyTimer = setTimeout(() => {
      setIsReady(true);
    }, 1500);
    
    return () => clearTimeout(readyTimer);
  }, []);

  useEffect(() => {
    if (isReady) {
      const printTimer = setTimeout(() => {
        window.print();
      }, 500);
      
      return () => clearTimeout(printTimer);
    }
  }, [isReady]);

  return (
    <MotionConfig reducedMotion="always">
      <div className="print-view presentation3-theme">
        {!isReady && (
          <div className="print-loading">
            <div className="print-loading-text">Preparing slides for print...</div>
          </div>
        )}
        {slides3.map((slide) => (
          <div key={slide.id} className="print-slide">
            <div className="print-slide-content">
              <SlideRenderer3 slide={slide} />
            </div>
            <div className="print-slide-number">{slide.id}</div>
          </div>
        ))}
      </div>
    </MotionConfig>
  );
};

export default PrintView3;