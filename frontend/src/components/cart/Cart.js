import React from "react";
import axios from "axios";
import "./Cart.css"
import { useContext, useState, useEffect } from "react";
import {tokenContext} from '../../App'

const Cart =  () => {
    let token = useContext(tokenContext)
    const [insideCart, setInsideCart] = useState([]);

  useEffect (() => {
     axios
      .get(`http://localhost:5000/cart`,{ 
        headers: { Authorization: `Bearer ${token}`}})
      .then( (result) => {
        console.log("res222" , result.data.products );
        setInsideCart(result.data.products )
      })
      .catch((err) => {
        console.log(err);
        return 
      });
  },[])

  
  return (
    <>
      {insideCart&&insideCart.map((elem )=>{
      console.log("elmmmmm",elem.purchase[0].title);
          return( <>
          <div className="CartBox">
            <img  src={elem.purchase[0].img }/>
            {elem.purchase[0].title}
            <button >delete</button>
            </div>
            <br />
            </>)       
      })
    }
    {(insideCart && insideCart)?(<button> check out </button>):(<p>""</p>)}
    </>
  );
};



export default Cart;
