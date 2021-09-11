import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import './main.css';
import ProductCategory from '../category/ProductCategory';
import Header from '../header';
import {FaShoppingCart,FaSearch ,FaHeart} from "react-icons/fa";


const Main = () => {
    const [getCategory, setGetCategory] = useState();
    const [getProduct, setGetProduct] = useState();
    const history = useHistory()
    
	useEffect(() => {
		axios.get(`http://localhost:5000/category`).then((res) => {
			setGetCategory(res.data.result);
        }).catch((err) => {
            console.log(err);
        })
    }, []);


	useEffect(() => {
		axios.get(`http://localhost:5000/product`).then((res) => {
			setGetProduct(res.data.products);
			
		}).catch((err) => {
			console.log(err);
		})
	},[])




// event on the shopnow butthon inside the category 
	const eventOnButton =(title ,id)=>{
		console.log("cate id"  , id );
		console.log("cate title"  , title );
	
		history.push(`/category/${title}/${id}`);
		
}

///when you click button it's will get product using id

const getallProducts = (id)=>{
	
	history.push(`product/${id}`)
}

///Get All Category 
    return <div className = "container" >
		  <Header/>
		<h2>What We Have Collections  </h2>

		<div className = "category-section">
		{getCategory&&
		getCategory.map((cate)=>{
			console.log("cate" , cate );
			return (
				<div className = "categoryMain">
						<img src={cate.img}></img>
						<div className = "titleforCategory">
						<h2>{cate.title}</h2>
						<button className ='buttonCategory' onClick={()=>eventOnButton(cate.title,cate._id )}>Shop 1 Now</button>
						</div>
				</div>
				
			)
		})}
			</div>


			<div className='product-section'>
				{getProduct&&
				getProduct.map((product)=>{
					return (
						<div className = "productMain">
							<img src={product.img}></img>
							<div class='showdetails'>
								<div className = "show-icon">
							
							<div className = "icon">
							<FaShoppingCart className = "icon-cart"/>
								<FaSearch className = "icon-search" onClick={()=>getallProducts(product._id)}/>
								<FaHeart className = "icon-heart"/>
							</div>
								</div>
							</div>
						</div>
					)
				})}
				
			</div>
		</div>;
};

export default Main;