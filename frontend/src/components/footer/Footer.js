import React from 'react';
import './footer.css';
import { FaFacebookSquare ,FaInstagram } from "react-icons/fa";


const Footer = () => {
return <div className="footerbottom main-Cont">
		<div className="container-fluid"> 

		<footer>

			
			<div className="footerMain">
			<div>
				<h3>GET IN TOUCH</h3>
				<p>Please call 079 600 2115 and we will be happy to assist you.</p>
			</div>


			<div>
				<h3>NEWSLETTER</h3>
				<p>Join the Lucky newsletter.</p>
			</div>

			</div>
			<hr></hr>

			<hr></hr>
			<div className='iconFooter'>
				<FaFacebookSquare className='Facebook'/>
				<FaInstagram className='Instagram'/>
			</div>
		</footer>

		</div>
</div>;
};

export default Footer;
