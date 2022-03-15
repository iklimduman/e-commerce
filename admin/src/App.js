
import './App.css';
import Topbar from "./Component/Topbar/Topbar";
import Sidebar from './Component/Sidebar/Sidebar';
import Home from './Component/Pages/Home';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>

    </div>
  );
}

export default App;
