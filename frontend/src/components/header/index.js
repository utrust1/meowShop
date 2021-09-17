import React from 'react';
import SliderImg from './SliderImg';
import './header.css';

const Header = () => {
	return <div className="container">
		 {SliderImg.map((slider , index) => {
			 return(
				 <img src=
					{slider.image}>
				 </img>
			 )

		 })}
	
	</div>;
};

export default Header;
