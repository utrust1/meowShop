import React from 'react';
import {FaEnvelope} from  "react-icons/fa"
import "./footer.css";
import { useHistory } from 'react-router';
import "./Aboutus"
import "./Contactus"
import "./Ourpolicy"



const Footer = () => {

const history =useHistory() 

const aboutUsEvent = ()=>{
        history.push("/AboutUs")
	}
const ourPolicyEvent = ()=>{
		history.push("/OurPolicy")
	}
const contactUsEvent = ()=>{
		history.push("/ContactUs")
    }
return <div className="FooterPerant"> 
<div className="between">
<div className="footerChild">
	<p onClick={()=>{aboutUsEvent()}}>About us </p>
	<p onClick={()=>{ourPolicyEvent()}}>Our Policy</p>
	<span onClick={()=>{contactUsEvent()}} >Contact us <FaEnvelope  className="emailIcon" /></span>
</div>
</div>

</div>;
};

export default Footer;
