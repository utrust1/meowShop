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
		{getCategory&&
		getCategory.map((cate)=>{
			return (
				<h1>{cate.title}</h1>
			)
		})}
		</div>;
};

export default Main;