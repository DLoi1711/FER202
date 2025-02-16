import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import FUCard from './components/FUCard';
import Header from './components/Header';
import FuWeb from './components/FUWeb';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <AboutMe/>
      <FUCard/>
      <Header/>
      <FuWeb/>
      <Footer/>
    </div>
  );
}

export default App;
