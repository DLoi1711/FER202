import logo from './logo.svg';
import './App.css';
import ThemeToggleButton from './components/ThemeToggleButton';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider> 
      <div> 
        <h1>Welcome to React!</h1> 
        <ThemeToggleButton /> 
        </div> 
        </ThemeProvider> 
  );
}

export default App;
