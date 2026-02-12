import { motion } from 'framer-motion';
import type { Slide2 } from '../../data/slides2';
import ClickableImage from './ClickableImage';
import { getSlide2ImageSrc } from '../../utils/slideImage';
import './SlideStyles2.css';

interface ImageSlide2Props {
  slide: Slide2;
}

const ImageSlide2 = ({ slide }: ImageSlide2Props) => {
  const { content } = slide;

  return (
    <motion.div 
      className="slide2 slide2-image"
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

      <motion.div 
        className="image-slide2-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        {content.imageSrc && (
          <ClickableImage 
            src={getSlide2ImageSrc(content.imageSrc)} 
            alt={slide.title}
            className="image-slide2-img"
            scale={content.imageScale}
          />
        )}
        {content.imageCaption && (
          <p className="image-slide2-caption">{content.imageCaption}</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ImageSlide2;
