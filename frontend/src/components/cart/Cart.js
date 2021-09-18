import React from "react";
import axios from "axios";
import "./Cart.css"
import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import {tokenContext} from '../../App'
import { FaShoppingBag } from 'react-icons/fa';


const Cart =  () => {
    let saveToken = localStorage.getItem("saveToken")
    let b 
    let total  = 0; 
    let token = useContext(tokenContext)
    const [insideCart, setInsideCart] = useState([]);
    const [price , setPrice] = useState([])

    const [empty , setEmpty] = useState()
    


    let carts = {}
    const history = useHistory()
    useEffect(()=>{getAllCart()},[])
    console.log(" caaaaa " ,carts);
    const getAllCart = () => {
      console.log("memmmw");
      axios
      .get(`http://localhost:5000/cart`,{ 
        headers: { Authorization: `Bearer ${saveToken}`}})
        .then( (result) => {         
          if(result.data.products.length > 0){
            setInsideCart(result.data.products)
            setPrice(result.data.products)
          }else{
            setEmpty('YOUR CART IS CURRENTLY EMPTY.');
            setInsideCart(result.data.products)
            setPrice(result.data.products)
          }
        })
        .catch((err) => {
          console.log(err);
        });   
      }
      
      
  const deleteCart = (id) =>{
    axios
      .delete(`http://localhost:5000/cart/${id}`).then((result)=>{
        getAllCart()
      }).catch((err)=>{
        console.log(err)
      })
  }
  const checkout = ()=>{
    history.push('/shipping')
  }
 
  return (
    <div className="container">
    <div className="CartPerant">
      <h4>SHOPPING CART</h4>
      <h5>{empty}</h5>
      {insideCart&&insideCart.map((elem )=>{
         total+= elem.purchase[0].newprice
         if(carts[elem.purchase[0]._id]){
          carts[elem.purchase[0]._id]+=1 
            return  ( <div className="carthidden"> quantity :  {carts[elem.purchase[0]._id]} </div>  )            
          }else{
                carts[elem.purchase[0]._id]=1         
              }
          return( <>
          <div className="CartBox">
            <div>
            <img  src={elem.purchase[0].img }/>
            </div>
            <div className="CartDes">
            <h3>{elem.purchase[0].title}</h3>
            <p>{elem.purchase[0].description}</p>
            <p className="cartPrice">{elem.purchase[0].newprice} JD</p>
            </div>
    


            <div>
            <button className='btnCart'onClick={()=>{deleteCart(elem._id)}} >Delete</button>
            </div>
          </div>
          <hr></hr>
            </>)       
      })
    }
    <div className="checkout-btn">
 

      <div>
      
      </div>
      <div className='subtotal'>
        
      <p> Subtotal  : <span>{total} JD</span></p>
      {(insideCart && insideCart)?(<button onClick={checkout}> <FaShoppingBag/> CHECKOUT </button>):(<p>""</p>)}</div>     
      
      </div>
    </div>
    </div>
  );
};



export default Cart;
