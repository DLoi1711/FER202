import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ChangeNameAge from './components/ChangeNameAge';
import ItemList from './components/ItemList';
import QuestionBank from './components/QuestionBank';
import './style.css';

function App() {
  return (
    <div className="App">
      <Counter/>
      <ChangeNameAge/>
      <ItemList/>
      <QuestionBank/>
    </div>
  );
}

export default App;
