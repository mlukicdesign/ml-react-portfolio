import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './HeroSection';
import ProfileSection from './ProfileSection';
import Capabilities from './Capabilities';
import SelectedWorks from './Works';



// Consolidated components into home page to allow correct routing

function Home() {
    return (
      <div className="App">
        < HeroSection />
        < ProfileSection />
        < Capabilities />
        < SelectedWorks />
      </div>
    );
  }

  export default Home;