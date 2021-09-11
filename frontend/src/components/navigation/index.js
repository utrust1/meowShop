import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'
import { IconName } from "react-icons/fa";

const Navigation = () => {
	return <div className="container">
	<div className='Navigation'> 
		<p>logoname</p>
		<div className='Searchbar'>
			<input type='text' placeholder='what do you want'></input>
		</div>
		<div>
		<Link to="/login" className='navlogin'>Login </Link>
		<Link to="/cart" className='navcart'>cart </Link></div>
		</div>
		 </div>;
};

export default Navigation;
