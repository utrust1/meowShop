import React , {useState ,useEffect } from 'react';
import axios from 'axios';
import './main.css';

const Main = () => {

	useEffect(()=>{
		
	}, []);


	const getallCategory = () => {
		axios.get(`'http://localhost:5000/articles'`);
	}





	return <div className="App">
	</div>;
};

export default Main;
