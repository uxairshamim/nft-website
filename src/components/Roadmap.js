import Banner from './Banner';
import BottomCarousel from './BottomCarousel';
import TextSection from './TextSection';
import Carousel from './Carousel';
import Navigation from './Navigation';
import Teams from './Teams';

function Roadmap() {
    return (
      <div className="roadmap">
        <Navigation />
        <Banner />
        <Carousel />
        <TextSection />
        <BottomCarousel />
        <Teams />
      </div>
    );
  }
  
  export default Roadmap;
  