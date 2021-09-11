import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'
import { IconName ,  FaUserTie , FaShoppingCart , FaSearch} from "react-icons/fa";

const Navigation = () => {
	return <div className="container">
	<div className='Navigation'> 
	<div className='Searchbar'>
			<input type='text' placeholder='what do you want ' className= "SearchBarInput"></input> 
					<FaSearch className="searchIcon"/> 
		</div>
		<p> logoname  </p>
	
		<div className="navbar">
		<Link to="/login" className='navLogin'>Login</Link>
		<Link to="/Regster" className='navRegister'>Register</Link>
		<Link to="/cart" className='navcart'><FaShoppingCart/></Link></div>
		</div>
		 </div>;
};

export default Navigation;
