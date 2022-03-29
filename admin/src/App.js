
import './App.css';
import Topbar from "./Component/Topbar/Topbar";
import Sidebar from './Component/Sidebar/Sidebar';
import Home from './Component/Pages/Home';
import UserPage from './Component/Pages/UserPage';
import SingleUser from './Component/Pages/SingleUser';
import NewUser from './Component/Pages/NewUser';
import Products from './Component/Pages/Products' ;
import Product from './Component/Pages/Product';
import { Login } from './Component/Pages/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">

        <Sidebar />
        <Routes>
        <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<UserPage />} />
          <Route path="/user/:userID" element={<SingleUser />} />
          <Route path="/product/:productID" element={<Product />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/products" element={<Products />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
