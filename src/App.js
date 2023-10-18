import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Edu from './components/Edu';
import ECA from './components/ECA';
import { Skills } from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Edu/>
      <Skills/>
      <ECA/>
      <Awards/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
