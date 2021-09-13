import React from "react";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import {tokenContext} from '../../App'

const Cart = () => {
    let token = useContext(tokenContext)
  const [insideCart, setInsideCart] = useState("");

  useEffect( () => {
    axios
      .get(`http://localhost:5000/cart`,{ 
        headers: { Authorization: `Bearer ${token}`}})
      .then(async(result) => {
        console.log("kokokokokok", result.data.products);
        await setInsideCart(result.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {insideCart.map((elm)=>{
          return 
      })}
    </div>
  );
};

export default Cart;
