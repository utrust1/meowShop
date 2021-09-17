import React , {useState} from 'react';
import SliderImg from './SliderImg';
import './header.css';
import { FaArrowLeft ,FaArrowRight} from "react-icons/fa";


const Header = () => {

	const [sliders, setSliders] = useState(0);
	const length = SliderImg.length;

	if (!Array.isArray(SliderImg) || SliderImg.length <= 0) {
		return null;
	  }

	  const nextSlide = () => {
		setSliders(sliders === length - 1 ? 0 : sliders + 1);
	  };
	
	  const prevSlide = () => {
		setSliders(sliders === 0 ? length - 1 : sliders - 1);
	  };
	return <section className="sliderr">
		<FaArrowLeft className="left-arrow" onClick={() =>{nextSlide()}}/>
		<FaArrowRight className="right-arrow" onClick={() =>{prevSlide()}}/>
		 {SliderImg.map((slider , index) => {
			 return(
				    <div
            className={index === sliders ? 'slide active' : 'slide'}
            key={index}
          >
            {index === sliders && (
              <img src={slider.image}  className='imgslider' />
            )}
          </div>
			 )

		 })}
	
	</section>;
};

export default Header;
