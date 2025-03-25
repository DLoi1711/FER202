import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Review from './components/Review';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/reviews" element={<Review />} />
            </Routes>
        </Router>
    );
}

export default App;