import type { Slide2 } from '../data/slides2';
import TitleSlide2 from './slides2/TitleSlide2';
import TOCSlide2 from './slides2/TOCSlide2';
import SummarySlide2 from './slides2/SummarySlide2';
import TechStackSlide2 from './slides2/TechStackSlide2';
import TechComparisonSlide2 from './slides2/TechComparisonSlide2';
import DesignDecisionSlide2 from './slides2/DesignDecisionSlide2';
import UIDesignSlide2 from './slides2/UIDesignSlide2';
import APIRoutesSlide2 from './slides2/APIRoutesSlide2';
import DatabaseSlide2 from './slides2/DatabaseSlide2';
import ImageSlide2 from './slides2/ImageSlide2';
import ReferencesSlide2 from './slides2/ReferencesSlide2';
import ThankYouSlide2 from './slides2/ThankYouSlide2';

interface SlideRenderer2Props {
  slide: Slide2;
}

const SlideRenderer2 = ({ slide }: SlideRenderer2Props) => {
  switch (slide.type) {
    case 'title':
      return <TitleSlide2 slide={slide} />;
    case 'toc':
      return <TOCSlide2 slide={slide} />;
    case 'summary':
      return <SummarySlide2 slide={slide} />;
    case 'tech-stack':
      return <TechStackSlide2 slide={slide} />;
    case 'tech-comparison':
      return <TechComparisonSlide2 slide={slide} />;
    case 'design-decision':
      return <DesignDecisionSlide2 slide={slide} />;
    case 'ui-design':
      return <UIDesignSlide2 slide={slide} />;
    case 'api-routes':
      return <APIRoutesSlide2 slide={slide} />;
    case 'database':
      return <DatabaseSlide2 slide={slide} />;
    case 'image-slide':
      return <ImageSlide2 slide={slide} />;
    case 'references':
      return <ReferencesSlide2 slide={slide} />;
    case 'thank-you':
      return <ThankYouSlide2 slide={slide} />;
    default:
      return <div>Unknown slide type</div>;
  }
};

export default SlideRenderer2;
