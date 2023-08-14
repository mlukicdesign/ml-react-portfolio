import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Project1 from './components/Project1';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PageTransition from './components/PageTransition';

// Navigation & Contact components sit outside router to allow for correct routing


function App() {
  return (
    <div className="App">
      <Navigation/>
      <PageTransition>
    <HashRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/project1' element={<Project1 />}></Route>
      </Routes>
    </HashRouter>
      </PageTransition>
      <Contact />
    </div>
  );
}

export default App;
