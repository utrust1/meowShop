import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

    return <div className = "App" >
		<div className = "category-section">
		{getCategory&&
		getCategory.map((cate)=>{
			return (
				<div>
					<img src={cate.img}></img>
					<p>{cate.img}</p>
					<h2>{cate.title}</h2>
					<p>{cate.description}</p>
					<button>Shop Now</button>
				</div>
				
			)
		})}
		</div>
		</div>;
};

export default Main;