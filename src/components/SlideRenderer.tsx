import type { Slide } from '../data/slides';
import TitleSlide from './slides/TitleSlide';
import UsersSlide from './slides/UsersSlide';
import PersonaSlide from './slides/PersonaSlide';
import StoriesSlide from './slides/StoriesSlide';
import RequirementsSlide from './slides/RequirementsSlide';
import WBSSlide from './slides/WBSSlide';
import ScheduleSlide from './slides/ScheduleSlide';
import RiskSlide from './slides/RiskSlide';
import PerformanceSlide from './slides/PerformanceSlide';
import SecuritySlide from './slides/SecuritySlide';
import ThankYouSlide from './slides/ThankYouSlide';
import ScopeSlide from './slides/ScopeSlide';

interface SlideRendererProps {
  slide: Slide;
}

const SlideRenderer = ({ slide }: SlideRendererProps) => {
  switch (slide.type) {
    case 'title':
      return <TitleSlide slide={slide} />;
    case 'users':
      return <UsersSlide slide={slide} />;
    case 'persona':
      return <PersonaSlide slide={slide} />;
    case 'stories':
      return <StoriesSlide slide={slide} />;
    case 'requirements':
      return <RequirementsSlide slide={slide} />;
    case 'wbs':
      return <WBSSlide slide={slide} />;
    case 'schedule':
      return <ScheduleSlide slide={slide} />;
    case 'risk':
      return <RiskSlide slide={slide} />;
    case 'performance':
      return <PerformanceSlide slide={slide} />;
    case 'security':
      return <SecuritySlide slide={slide} />;
    case 'scope':
      return <ScopeSlide slide={slide} />;
    case 'thank-you':
      return <ThankYouSlide slide={slide} />;
    default:
      return <div>Unknown slide type</div>;
  }
};

export default SlideRenderer;
