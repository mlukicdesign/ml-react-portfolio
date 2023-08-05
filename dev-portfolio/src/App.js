import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import Capabilities from './components/Capabilities';
import SelectedWorks from './components/Works';




function App() {
  return (
    <div className="App">
      < Navigation />
      < HeroSection />
      < ProfileSection />
      < Capabilities />
      < SelectedWorks />
    </div>
  );
}

export default App;
