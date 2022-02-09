import Banner from './Banner';
import BottomCarousel from './BottomCarousel';
import TextSection from './TextSection';
import Carousel from './Carousel';
import Navigation from './Navigation';

function Roadmap() {
    return (
      <div className="roadmap">
        <Navigation />
        <Banner />
        <Carousel />
        <TextSection />
        <BottomCarousel />
      </div>
    );
  }
  
  export default Roadmap;
  