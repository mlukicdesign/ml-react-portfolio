import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import Capabilities from './components/Capabilities';
import SelectedWorks from './components/Works';
import Contact from './components/Contact';
import Project1 from './components/Project1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

// Navigation & Contact components sit outside router to allow for correct routing


function App() {
  return (
    <div className="App">
      <Navigation/>
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/project1' element={<Project1 />}></Route>
      </Routes>
    </Router>
      <Contact />
    </div>
  );
}

export default App;
