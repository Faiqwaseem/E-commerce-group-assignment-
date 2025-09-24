import Carousel from 'react-bootstrap/Carousel';
import bannershop1 from '../assets/images/shop1.png'
import bannershop2 from '../assets/images/shop2.png'
import bannershop3 from '../assets/images/shop3.png'
function CarouselsShop() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="banner-img d-block w-100"
          src={bannershop1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="banner-img d-block w-100"
          src={bannershop2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner-img d-block w-100"
          src={bannershop3}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselsShop;