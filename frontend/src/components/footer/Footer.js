import React from 'react';
import {FaEnvelope} from  "react-icons/fa"
import "./Footer.css";
import { useHistory } from 'react-router';
import "./Aboutus"
import "./Contactus"
import "./Ourpolicy"



const Footer = () => {

const history =useHistory() 

	const aboutUsEvent = ()=>{

	}
	

	const ourPolicyEvent = ()=>{

	}

	const contactUsEvent = ()=>{


	}
	




return <div className="FooterPerant"> 
<div className="footerChild">
	<p onClick={()=>{aboutUsEvent()}}>About us </p>
	<p onClick={()=>{ourPolicyEvent()}}>Our Policy</p>
	<span onClick={()=>{contactUsEvent()}} ><FaEnvelope  className="emailIcon" />Contact us</span>
</div>


</div>;
};

export default Footer;
