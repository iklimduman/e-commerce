import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import CategoryContainer from '../Components/CategoryContainer';
import CarouselContainer from '../Components/CarouselContainer';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <CategoryContainer />
            <CarouselContainer />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home ;