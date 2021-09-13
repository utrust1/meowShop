import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import './main.css';
import Header from '../header';
import {FaShoppingCart,FaSearch ,FaHeart} from "react-icons/fa";
import { useContext } from 'react';
import { tokenContext } from "../../App"
import { checkRegisterContext } from "../../App"
 



const Main = () => {
	let token = useContext(tokenContext);
	let checkRegister = useContext(checkRegisterContext)

    const [getCategory, setGetCategory] = useState();
    const [getProduct, setGetProduct] = useState();
	const [number , setNumber] = useState(0)
	const [sendsArray , setSendsArray] = useState([])
	const [wishListArray , setWishListArray] = useState([])
	const [wishListNumber , setWishListNumber] =useState(0)
	
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

	const navigationCart  = ()=>{
		let senderFile = sendsArray
		axios.post(`http://localhost:5000/cart`,senderFile, {headers:{'Authorization': `Bearer ${token}`}}).then(async (res)=>{
        }).catch((err)=>{
			console.log(err)
		})
	}

	const sender = (id)=>{
		if (token ||checkRegister ){
			let purchase = id 
		console.log('purchase' , purchase);
		setSendsArray([...sendsArray , {purchase:purchase}])
		console.log("plapla" , sendsArray);
		if(number){
			 setNumber(number+1)
			console.log('second time : ' ,number)
			 localStorage.setItem("productNumber",number+1)
		}else{				
			 setNumber(1)
			console.log('first time : ' ,number)
			 localStorage.setItem("productNumber",number+1)
			
		}
		}else {
console.log("you have to log in first ");
		}
		
	}
	
 /************************************ (wish list)  *****************************************/


const wishList = ()=>{

}

const addToWishList =(id)=>{
 if (token ||checkRegister){
	let productId = id 
	setWishListArray([...wishListArray , {purchase:productId}])
		if(wishListNumber){
			setWishListNumber(wishListNumber+1)
		
			 localStorage.setItem("wishList",wishListNumber+1)
		}else{				
			setWishListNumber(1)
			localStorage.setItem("wishList",wishListNumber+1)
			
		}
 } else {
	 console.log("you have to log in first ")
 }
}


// event on the shopnow butthon inside the category 
	const eventOnButton =(title ,id)=>{
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
			return (
				<div className = "categoryMain">
						<img className="categoryImg" style={{height:"500px"}} src={cate.img}></img>
						<div className = "titleforCategory">
							<div className = "categorycontact">
							<h2>{cate.title}</h2>
						<button className ='buttonCategory' onClick={()=>eventOnButton(cate.title,cate._id )}>Shop Now</button>
							</div>
						</div>
						
				</div>
				
			)
		})}
			</div>
			{number}
            {wishListNumber}

			<div className='product-section'>
				{getProduct&&
				getProduct.map((product)=>{
					return (
						<div className = "productMain">
							<img src={product.img}></img>
							<div class='showdetails'>
								<div className = "show-icon">
							
							<div className = "icon">
							<FaShoppingCart className = "icon-cart" onClick={()=>sender(product._id)}/>
								<FaSearch className = "icon-search" onClick={()=>getallProducts(product._id)}/>
								<FaHeart className = "icon-heart"  onClick={()=>addToWishList(product._id)} />
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