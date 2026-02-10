import { motion } from 'framer-motion';
import type { Slide2 } from '../../data/slides2';
import './SlideStyles2.css';

interface TitleSlide2Props {
  slide: Slide2;
}

const TitleSlide2 = ({ slide }: TitleSlide2Props) => {
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
      className="slide2 slide2-title"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="title2-decoration">
        <div className="deco2-line deco2-line-1" />
        <div className="deco2-line deco2-line-2" />
        <div className="deco2-corner deco2-corner-tl" />
        <div className="deco2-corner deco2-corner-tr" />
        <div className="deco2-corner deco2-corner-bl" />
        <div className="deco2-corner deco2-corner-br" />
      </div>

      <motion.div className="title2-content" variants={itemVariants}>
        <span className="title2-tag">CPSC 319 // DESIGN PRESENTATION</span>
        <h1 className="main2-title">{slide.title}</h1>
        <p className="title2-subtitle">{content.subtitle}</p>
      </motion.div>

      {content.team && (
        <motion.div className="team2-roster" variants={itemVariants}>
          <div className="roster2-header">
            <span className="roster2-line" />
            <span className="roster2-label">TEAM MEMBERS</span>
            <span className="roster2-line" />
          </div>
          <div className="roster2-grid">
            {content.team.map((member, index) => (
              <motion.div 
                key={member.name}
                className="roster2-member"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span className="member2-name">{member.name}</span>
                <span className="member2-role">{member.role}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TitleSlide2;
