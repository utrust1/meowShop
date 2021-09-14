import React from "react";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import {tokenContext} from '../../App'

const Cart =  () => {
    let token = useContext(tokenContext)
    const [insideCart, setInsideCart] = useState();

  useEffect (() => {
     axios
      .get(`http://localhost:5000/cart`,{ 
        headers: { Authorization: `Bearer ${token}`}})
      .then( (result) => {
        
        let x=  result.data.products.purchase
         setInsideCart(x);
        console.log("momomomom",insideCart)
      })
      .catch((err) => {
        console.log(err);
        return 
      });
  },[])
  
  return (
    <div>
      okoko
    </div>
  );

};



export default Cart;
