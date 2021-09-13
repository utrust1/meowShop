import React from 'react';
import {FaEnvelope} from  "react-icons/fa"

const Footer = () => {

return <div className="Footer"> 
 
<div className="our infprmation">
	<p>About us </p>
	<span><FaEnvelope  className="emialIcon" style={{fontSize:"50px"}} />Contact us</span>
</div>


</div>;
};

export default Footer;
