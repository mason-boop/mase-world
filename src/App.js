import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import About from './components/pages/About';
import Designs from './components/pages/Designs';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Photos from './components/pages/Photos';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/designs" exact Component={Designs} />
          <Route path="/photos" exact Component={Photos} />
          <Route path="/*" exact Component={About} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
