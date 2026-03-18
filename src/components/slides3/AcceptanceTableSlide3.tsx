import { motion } from 'framer-motion';
import type { Slide3 } from '../../data/slides3';
import './SlideStyles3.css';

interface AcceptanceTableSlide3Props {
  slide: Slide3;
}

const AcceptanceTableSlide3 = ({ slide }: AcceptanceTableSlide3Props) => {
  const { content } = slide;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'met':
        return 'status-met';
      case 'partial':
        return 'status-partial';
      case 'not-met':
        return 'status-not-met';
      default:
        return '';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'met':
        return '✓ MET';
      case 'partial':
        return '◐ PARTIAL';
      case 'not-met':
        return '✗ NOT MET';
      default:
        return status.toUpperCase();
    }
  };

  return (
    <motion.div
      className="slide3 slide3-acceptance-table"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="slide3-heading">{slide.title}</h2>

      <div className="acceptance-table3-wrapper">
        <table className="acceptance-table3">
          <thead>
            <tr>
              <th className="at3-th-feature">Feature</th>
              <th className="at3-th-criteria">Criteria</th>
              <th className="at3-th-status">Status</th>
              <th className="at3-th-evidence">Evidence / Notes</th>
            </tr>
          </thead>
          <tbody>
            {content.acceptanceCriteria?.map((c, i) => (
              <motion.tr key={i} variants={rowVariants}>
                <td className="at3-feature">{c.feature}</td>
                <td className="at3-criteria">{c.criteria}</td>
                <td className="at3-status-cell">
                  <span className={`at3-badge ${getStatusClass(c.status)}`}>
                    {getStatusLabel(c.status)}
                  </span>
                </td>
                <td className="at3-evidence">
                  {c.evidence || c.missing || '—'}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AcceptanceTableSlide3;
