import React from 'react';
import {FaEnvelope} from  "react-icons/fa"
import "./Footer.css";

const Footer = () => {

return <div className="FooterPerant"> 
 
<div className="footerChild">
	<p>About us </p>
	<p>Our Policy</p>
	<span><FaEnvelope  className="emailIcon" />Contact us</span>
</div>


</div>;
};

export default Footer;
