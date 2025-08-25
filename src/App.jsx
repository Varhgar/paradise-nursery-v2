import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;




