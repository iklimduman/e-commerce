
import './App.css';

import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import CategoryContainer from './Components/CategoryContainer';
import MainProductContainer from './Components/MainProductConteiner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <CategoryContainer />
      <MainProductContainer />
    </div>
  );
}

export default App;
