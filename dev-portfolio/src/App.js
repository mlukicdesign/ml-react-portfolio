import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import Capabilities from './components/Capabilities';
import SelectedWorks from './components/Works';
import Contact from './components/Contact';




function App() {
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

export default App;
