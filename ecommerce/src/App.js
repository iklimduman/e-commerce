
import './App.css';

import Home from './Pages/Home';
import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Success from './Pages/Success';

import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate 
} from "react-router-dom";

function App() {
  // temp boolen variable
  
  
  const user = useSelector((state) => state.user.currentUser);
  
  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={user ? <Navigate  to="/" /> : <Login />} /> 
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
 