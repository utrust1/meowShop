import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router';
import axios from 'axios';
import './product.css'
import {FaShoppingCart  ,FaHeart} from "react-icons/fa";
import { useContext } from 'react';
import { tokenContext } from "../../App";
import {cartNumberContext} from "../../App"
import  {wishListNumberContext} from "../../App"
import {checkRegisterContext} from "../../App"

const GetAllProduct=({setCartNumber ,setWishListNumber})=> {
  
  const goBackButton =()=>{
    history.goBack()
}

    let token = useContext(tokenContext);
    let cartNumber = useContext(cartNumberContext);
    let wishListNumber = useContext(wishListNumberContext);
    let checkRegister =  useContext(checkRegisterContext);

    const [getproduct , setGetproduct] = useState()
    const {id} = useParams()
    useEffect(() => {
		axios.get(`http://localhost:5000/product/${id}`).then((res) => {
			setGetproduct(res.data.result);
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    
    const history = useHistory();
    const getallProducts = (id) => {
      history.push(`product/${id}`);
    };

const cartAdd = (product)=>{
 let purchase = product._id
axios.post(`http://localhost:5000/cart`, {purchase} , {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            console.log("whooo");
            if (token || checkRegister) {
              if (cartNumber) {
                setCartNumber(cartNumber + 1);
                console.log("second time : ", cartNumber);
                localStorage.setItem("productcartNumber", cartNumber + 1);
              } else {
                setCartNumber(1);
                console.log("first time : ", cartNumber);
                localStorage.setItem("productcartNumber", cartNumber + 1);
              }
              getallProducts(purchase)
            } else {
              console.log("you have to log in first ");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
      const wishlistAdd = (products) => {
        let  product = products._id
        axios.post(`http://localhost:5000/wishlist` , {product},{ 
          headers: { Authorization: `Bearer ${token}`} },
         ).then((res)=>{
           console.log("meow 22");
           console.log("3oo",res.data)
           if (token || checkRegister) {
            if (wishListNumber) {
              setWishListNumber(wishListNumber + 1);
              localStorage.setItem("wishList", wishListNumber + 1);
            } else {
              setWishListNumber(1);
              localStorage.setItem("wishList", wishListNumber + 1);
            }
          } else {
            console.log("you have to log in first ");
          }
          getallProducts(product)
         }).catch((err)=>{
           console.error(err);
         })
        
      };

    return (
        <>
        <div className='showProduct'>
            {getproduct&&
           getproduct.map((product) => {
               return(
                   <div class='ProductMain'>
                       <div>
                           <img src={product.img}/>          
                       </div>
                       <div className='contactProduct'>
                           <h1>{product.title}</h1>
                           <p>{product.description}</p>
                           <p className='old-price'> old price <del> {product.oldPrice}</del></p>
                           <p> new price {product.newprice}</p>
                           <p className="Saving">Saving: {product.oldPrice - product.newprice}</p>
                           {/* <FaShoppingCart onClick={cartAdd(product)}/> */}
                           <butthon onClick={()=>{cartAdd(product)}} ><FaShoppingCart/></butthon>
                           <butthon  onClick={()=>{wishlistAdd(product)}} > <FaHeart/>    </butthon>                     
                       </div>
                     
                   </div>
               )
           })}             
        </div>
        <button onClick={()=>{goBackButton()}}> Back</button>
        </>
    )
}

export default GetAllProduct;
