import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useCallback, useState } from 'react';
import { slides } from '../data/slides';
import SlideRenderer from '../components/SlideRenderer';
import { exportToPDF } from '../utils/pdfExport';
import './Presentation.css';

const Presentation = () => {
  const { slideId } = useParams();
  const navigate = useNavigate();
  const currentSlide = parseInt(slideId || '1');
  const totalSlides = slides.length;
  const slide = slides.find(s => s.id === currentSlide);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToSlide = useCallback((id: number) => {
    if (id >= 1 && id <= totalSlides) {
      navigate(`/presentation/${id}`);
    }
  }, [navigate, totalSlides]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToSlide(currentSlide - 1);
    } else if (e.key === 'Escape' && !document.fullscreenElement) {
      navigate('/');
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    } else if (e.key === 'p' || e.key === 'P') {
      e.preventDefault();
      exportToPDF();
    }
  }, [currentSlide, goToSlide, navigate, toggleFullscreen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [handleKeyDown]);

  if (!slide) {
    return (
      <div className="presentation-error">
        <h2>Slide not found</h2>
        <button onClick={() => navigate('/')}>Return to Dashboard</button>
      </div>
    );
  }

  return (
    <div className={`presentation ${isFullscreen ? 'fullscreen-mode' : ''}`}>
      <div className="presentation-scanlines" />
      
      {/* Navigation Header */}
      <header className="presentation-header">
        <button className="nav-button home-button" onClick={() => navigate('/')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>DASHBOARD</span>
        </button>
        
        <div className="slide-counter">
          <span className="counter-current">{String(currentSlide).padStart(2, '0')}</span>
          <span className="counter-divider">/</span>
          <span className="counter-total">{String(totalSlides).padStart(2, '0')}</span>
        </div>
        
        <div className="nav-controls">
          <button 
            className="nav-button pdf-button" 
            onClick={exportToPDF}
            title="Download as PDF (P)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>PDF</span>
          </button>
          <button 
            className="nav-button fullscreen-button" 
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen (F)' : 'Fullscreen (F)'}
          >
            {isFullscreen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            )}
          </button>
          <button 
            className="nav-button" 
            onClick={() => goToSlide(currentSlide - 1)}
            disabled={currentSlide === 1}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button 
            className="nav-button" 
            onClick={() => goToSlide(currentSlide + 1)}
            disabled={currentSlide === totalSlides}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="progress-container">
        <motion.div 
          className="progress-bar"
          initial={{ width: 0 }}
          animate={{ width: `${(currentSlide / totalSlides) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Slide Content */}
      <main className="slide-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="slide-wrapper"
          >
            <SlideRenderer slide={slide} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Slide Navigation Dots */}
      <nav className="slide-dots">
        {slides.map((s) => (
          <button
            key={s.id}
            className={`dot ${s.id === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(s.id)}
            title={s.title}
          />
        ))}
      </nav>

      {/* Keyboard Hints */}
      <footer className="keyboard-hints">
        <span><kbd>←</kbd> <kbd>→</kbd> Navigate</span>
        <span><kbd>F</kbd> Fullscreen</span>
        <span><kbd>P</kbd> PDF</span>
        <span><kbd>ESC</kbd> Dashboard</span>
      </footer>
    </div>
  );
};

export default Presentation;
