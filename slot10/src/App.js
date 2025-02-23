import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
import App2 from './components/App2';
import ProductList from './components/ProductList';
import SearchFilter from './components/SearchFilter';

function App() {
  return (
    <div className="App">
      <Counter/>
      <App2/>
      <ProductList/>
      <SearchFilter/>
    </div>
  );
}

export default App;
