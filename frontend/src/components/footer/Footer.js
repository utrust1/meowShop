import React from 'react';
import {MdEmail} from  "react-icons/fa"

const Footer = () => {

return <div className="Footer"> 
 
<div className="our infprmation">
	<p>About us </p>
	<MdEmail className="emialIcon"/>
</div>

<div  className="footer icons">
	<a className="icon" href="#"> <i className="fa fa-facebook"></i></a>
	<a className="icon" href="#"> <i className=""></i></a>
</div>




</div>;
};

export default Footer;
