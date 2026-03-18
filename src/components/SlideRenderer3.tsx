import type { Slide3 } from '../data/slides3';
import TitleSlide3 from './slides3/TitleSlide3';
import TOCSlide3 from './slides3/TOCSlide3';
import SummarySlide3 from './slides3/SummarySlide3';
import TestStrategySlide3 from './slides3/TestStrategySlide3';
import TestCoverageSlide3 from './slides3/TestCoverageSlide3';
import AcceptanceCriteriaSlide3 from './slides3/AcceptanceCriteriaSlide3';
import TestResultsSlide3 from './slides3/TestResultsSlide3';
import DesignDecisionSlide3 from './slides3/DesignDecisionSlide3';
import ThankYouSlide3 from './slides3/ThankYouSlide3';
import QnASlide3 from './slides3/QnASlide3';

interface SlideRenderer3Props {
  slide: Slide3;
}

const SlideRenderer3 = ({ slide }: SlideRenderer3Props) => {
  switch (slide.type) {
    case 'title':
      return <TitleSlide3 slide={slide} />;
    case 'toc':
      return <TOCSlide3 slide={slide} />;
    case 'summary':
      return <SummarySlide3 slide={slide} />;
    case 'test-strategy':
      return <TestStrategySlide3 slide={slide} />;
    case 'test-coverage':
      return <TestCoverageSlide3 slide={slide} />;
    case 'acceptance-criteria':
      return <AcceptanceCriteriaSlide3 slide={slide} />;
    case 'test-results':
      return <TestResultsSlide3 slide={slide} />;
    case 'design-decision':
      return <DesignDecisionSlide3 slide={slide} />;
    case 'thank-you':
      return <ThankYouSlide3 slide={slide} />;
    case 'qna':
      return <QnASlide3 slide={slide} />;
    default:
      return (
        <div className="slide3 slide3-error">
          <h2>Unknown slide type: {slide.type}</h2>
        </div>
      );
  }
};

export default SlideRenderer3;