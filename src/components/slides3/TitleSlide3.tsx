import { motion } from 'framer-motion';
import type { Slide3 } from '../../data/slides3';
import './SlideStyles3.css';

interface TitleSlide3Props {
  slide: Slide3;
}

const TitleSlide3 = ({ slide }: TitleSlide3Props) => {
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
      className="slide3 slide3-title"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="title3-decoration">
        <div className="deco3-line deco3-line-1" />
        <div className="deco3-line deco3-line-2" />
        <div className="deco3-corner deco3-corner-tl" />
        <div className="deco3-corner deco3-corner-tr" />
        <div className="deco3-corner deco3-corner-bl" />
        <div className="deco3-corner deco3-corner-br" />
      </div>

      <motion.div className="title3-content" variants={itemVariants}>
        <span className="title3-tag">CPSC 319 // TEST PLAN PRESENTATION</span>
        <h1 className="main3-title">{slide.title}</h1>
        <p className="title3-subtitle">{content.subtitle}</p>
      </motion.div>

      {content.team && (
        <motion.div className="team3-roster" variants={itemVariants}>
          <div className="roster3-header">
            <span className="roster3-line" />
            <span className="roster3-label">TEAM MEMBERS</span>
            <span className="roster3-line" />
          </div>
          <div className="roster3-grid">
            {content.team.map((member, index) => (
              <motion.div 
                key={member.name}
                className="roster3-member"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span className="member3-name">{member.name}</span>
                <span className="member3-role">{member.role}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TitleSlide3;