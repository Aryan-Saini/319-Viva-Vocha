import { motion } from 'framer-motion';
import type { Slide } from '../../data/slides';
import './SlideStyles.css';

interface UsersSlideProps {
  slide: Slide;
}

const UsersSlide = ({ slide }: UsersSlideProps) => {
  const { content } = slide;
  const colors = ['cyan', 'magenta', 'yellow', 'green'];

  return (
    <motion.div 
      className="slide slide-users"
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

      <div className="users-grid">
        {content.personas?.map((persona, index) => (
          <motion.div
            key={persona.name}
            className={`user-card user-card-${colors[index % colors.length]}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
          >
            <div className="user-avatar">
              <span className="avatar-initial">{persona.name[0]}</span>
              <span className="avatar-age">{persona.age}</span>
            </div>
            <div className="user-info">
              <h3 className="user-name">{persona.name}</h3>
              <span className="user-role">{persona.role}</span>
            </div>
            <div className="user-accent" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UsersSlide;
