
import './App.css';

import Home from './Pages/Home';
import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/product" element={<SingleProduct/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
