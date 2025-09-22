import Carousel from 'react-bootstrap/Carousel';

function CarouselsShop() {
  return (
    <Carousel data-bs-theme="dark" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/previews/002/006/774/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/flat-supermarket-twitch-banner_23-2149355376.jpg?semt=ais_incoming&w=740&q=80"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-banner-template_120329-5177.jpg?semt=ais_incoming&w=740&q=80"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselsShop;