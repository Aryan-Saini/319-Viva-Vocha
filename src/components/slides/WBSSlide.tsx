import { motion } from 'framer-motion';
import type { Slide, WBSNode } from '../../data/slides';
import './SlideStyles.css';
import wbsImage1 from '../../assets/images/1/VV1.png';
import wbsImage2 from '../../assets/images/1/VV2.png';
import wbsImage3 from '../../assets/images/1/VV3.png';
import wbsImage4 from '../../assets/images/1/VV4.png';
import wbsImage5 from '../../assets/images/1/VV5.png';

interface WBSSlideProps {
  slide: Slide;
}

const WBSNodeComponent = ({
  node,
  level = 0,
  index = 0,
}: {
  node: WBSNode;
  level?: number;
  index?: number;
}) => {
  const colors = ['cyan', 'magenta', 'yellow', 'green'];
  const color = colors[level % colors.length];

  return (
    <motion.div
      className={`wbs-node wbs-level-${level} wbs-color-${color}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05 }}
    >
      <div className="wbs-node-content">
        <span className="wbs-node-title">{node.title}</span>
      </div>
      {node.children && node.children.length > 0 && (
        <div className="wbs-children">
          {node.children.map((child, i) => (
            <WBSNodeComponent
              key={i}
              node={child}
              level={level + 1}
              index={index + i}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

const WBSSlide = ({ slide }: WBSSlideProps) => {
  const { content } = slide;

  const getImageSource = () => {
    switch (content.wbsImageSrc) {
      case 'VV2':
        return wbsImage2;
      case 'VV3':
        return wbsImage3;
      case 'VV4':
        return wbsImage4;
      case 'VV5':
        return wbsImage5;
      default:
        return wbsImage1;
    }
  };

  return (
    <motion.div
      className="slide slide-wbs"
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

      {content.wbsImage ? (
        <motion.div
          className="wbs-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src={getImageSource()}
            alt="Work Breakdown Structure"
            className="wbs-image"
          />
        </motion.div>
      ) : (
        content.wbsData && (
          <div className="wbs-container">
            <WBSNodeComponent node={content.wbsData} />
          </div>
        )
      )}
    </motion.div>
  );
};

export default WBSSlide;
