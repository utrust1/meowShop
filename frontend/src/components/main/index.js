import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import './main.css';
import ProductCategory from '../category/ProductCategory';
import Header from '../header';

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
	   <ProductCategory  toto = {id}  /> 
		history.push(`/category/${title}/${id}`);
		
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
									<p>add cart </p>
									<p>show item </p>
									<p>wishlist </p>
								</div>
							</div>
						</div>
					)
				})}
				
			</div>
		</div>;
};

export default Main;