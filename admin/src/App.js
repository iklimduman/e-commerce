
import './App.css';
import Topbar from "./Component/Topbar/Topbar";
import Sidebar from './Component/Sidebar/Sidebar';
import Home from './Component/Pages/Home';
import UserPage from './Component/Pages/UserPage';
import SingleUser from './Component/Pages/SingleUser';

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
          <Route exact path="/" element={<Home />}>

          </Route>
          <Route exact path="/users" element={<UserPage />}>

          </Route>
          <Route path="/user/:userID" element={<SingleUser />}>

          </Route>
        </Routes>

      </div>

    </Router>
  );
}

export default App;
