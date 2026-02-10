import { motion } from 'framer-motion';
import type { Slide } from '../../data/slides';
import './SlideStyles.css';

interface TitleSlideProps {
  slide: Slide;
}

const TitleSlide = ({ slide }: TitleSlideProps) => {
  const { content } = slide;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className="slide slide-title"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="title-decoration">
        <div className="deco-line deco-line-1" />
        <div className="deco-line deco-line-2" />
        <div className="deco-corner deco-corner-tl" />
        <div className="deco-corner deco-corner-tr" />
        <div className="deco-corner deco-corner-bl" />
        <div className="deco-corner deco-corner-br" />
      </div>

      <motion.div className="title-content" variants={itemVariants}>
        <span className="title-tag">CPSC 319 // REQUIREMENTS PRESENTATION</span>
        <h1 className="main-title">{slide.title}</h1>
        <p className="title-subtitle">{content.subtitle}</p>
      </motion.div>

      {content.team && (
        <motion.div className="team-roster" variants={itemVariants}>
          <div className="roster-header">
            <span className="roster-line" />
            <span className="roster-label">TEAM MEMBERS</span>
            <span className="roster-line" />
          </div>
          <div className="roster-grid">
            {content.team.map((member, index) => (
              <motion.div 
                key={member.name}
                className="roster-member"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span className="member-name">{member.name}</span>
                <span className="member-role">{member.role}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TitleSlide;
