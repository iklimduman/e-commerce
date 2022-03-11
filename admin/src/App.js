
import './App.css';
import Topbar from "./Component/Topbar/Topbar";
import Sidebar from './Component/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="other">
          test
        </div>
      </div>

    </div>
  );
}

export default App;
