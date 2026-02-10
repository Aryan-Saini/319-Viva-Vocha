import { motion } from 'framer-motion';
import type { Slide } from '../../data/slides';
import './SlideStyles.css';
import scheduleImage from '../../assets/images/1/VV6.png';

interface ScheduleSlideProps {
  slide: Slide;
}

const ScheduleSlide = ({ slide }: ScheduleSlideProps) => {
  const { content } = slide;

  return (
    <motion.div
      className="slide slide-schedule"
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

      {content.scheduleImage ? (
        <motion.div
          className="schedule-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src={scheduleImage}
            alt="Project Schedule"
            className="schedule-image"
          />
        </motion.div>
      ) : (
        <div className="schedule-content">
          {content.milestones && (
            <motion.div
              className="milestones-section"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="schedule-section-title">Major Milestones</h3>
              <div className="timeline">
                {content.milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="timeline-marker" />
                    <div className="timeline-content">
                      <span className="timeline-date">{milestone.date}</span>
                      <span className="timeline-title">{milestone.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {content.sections && (
            <motion.div
              className="phases-section"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="schedule-section-title">Project Phases</h3>
              <div className="phases-grid">
                {content.sections.map((section, index) => (
                  <motion.div
                    key={index}
                    className="phase-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <h4 className="phase-title">{section.title}</h4>
                    <ul className="phase-items">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ScheduleSlide;
