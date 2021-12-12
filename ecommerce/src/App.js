
import './App.css';

import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import CategoryContainer from './Components/CategoryContainer';
import CarouselContainer from './Components/CarouselContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <CategoryContainer />
      <CarouselContainer />
    </div>
  );
}

export default App;
