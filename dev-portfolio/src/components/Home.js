import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './HeroSection';
import ProfileSection from './ProfileSection';
import Capabilities from './Capabilities';
import SelectedWorks from './Works';
import Contact from './Contact';

function Home() {
    return (
      <div className="App">
        < Navigation />
        < HeroSection />
        < ProfileSection />
        < Capabilities />
        < SelectedWorks />
        < Contact />
      </div>
    );
  }

  export default Home;