
import './App.css';

import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import CategoryContainer from './Components/CategoryContainer';
import CarouselContainer from './Components/CarouselContainer';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <CategoryContainer />
      <CarouselContainer />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
