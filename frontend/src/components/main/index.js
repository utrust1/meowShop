import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBeer } from 'react-icons/fa';
import './main.css';

const Main = () => {

    useEffect(() => {
		axios.get(`http://localhost:5000/category`).then((res) => {
			setGetCategory(res.data.result);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const [getCategory, setGetCategory] = useState();

    return <div className = "container" >
		
		<h2>What We Have Collections  </h2>
		<div className = "category-section">
		{getCategory&&
		getCategory.map((cate)=>{
			return (
				<div className = "categoryMain">
						<img src={cate.img}></img>
						<div className = "titleforCategory">
						<h2>{cate.title}</h2>
						<button className ='buttonCategory'>Shop Now</button>
						</div>
				</div>
				
			)
		})}
			</div>
		</div>;
};

export default Main;