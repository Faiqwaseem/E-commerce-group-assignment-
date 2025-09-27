import Carousel from 'react-bootstrap/Carousel';

import bannerHome1 from '../assets/images/home1.png'
import bannerHome2 from '../assets/images/home2.png'
import bannerHome3 from '../assets/images/home3.png'

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="banner-img d-block w-100 "
          src= {bannerHome1} // yahan apni image ka path
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
     <img
          className="banner-img d-block w-100 "
          src= {bannerHome2} // yahan apni image ka path
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
       <img
          className="banner-img d-block w-100 "
          src= {bannerHome3} // yahan apni image ka path
          alt="First slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;