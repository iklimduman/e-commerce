
import './App.css';

import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import CategoryContainer from './Components/CategoryContainer';
import CarouselContainer from './Components/CarouselContainer';
import Newsletter from './Components/Newsletter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <CategoryContainer />
      <CarouselContainer />
      <Newsletter />
    </div>
  );
}

export default App;
