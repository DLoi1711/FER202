import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div>
      <Header />
      <Title />
      <StudentCard />
      <Footer/>
    </div>
  );
}

export default App;
