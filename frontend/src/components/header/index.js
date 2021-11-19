import './header.css';
import Carousel from 'react-bootstrap/Carousel'
const Header = () => {
	return (	
	<div className="container-fluid">
	<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/2305947/pexels-photo-2305947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img className="d-block w-100"
      src="https://images.pexels.com/photos/2305947/pexels-photo-2305947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
   
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/2305947/pexels-photo-2305947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    
    />
 
  </Carousel.Item>
</Carousel>
	</div>
	);
};

export default Header;
