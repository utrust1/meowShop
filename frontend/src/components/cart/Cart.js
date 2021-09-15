import React from "react";
import axios from "axios";
import "./Cart.css"
import { useContext, useState, useEffect } from "react";
import {tokenContext} from '../../App'


const Cart =  () => {
    let token = useContext(tokenContext)
    const [insideCart, setInsideCart] = useState([]);
    const [price , setPrice] = useState(0)
    
    useEffect(()=>{getAllCart()},[])
    
    const getAllCart = () => {
      axios
      .get(`http://localhost:5000/cart`,{ 
        headers: { Authorization: `Bearer ${token}`}})
        .then( (result) => {
          console.log("res222" , result.data.products );
          setInsideCart(result.data.products )
          setPrice(result.data.products.purchase[0]._id)
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

  
  return (
    <>
      {insideCart&&insideCart.map((elem )=>{
      console.log("elmmmmm",elem.purchase[0].title);
console.log("ememememe" , elem._id);
          return( <>
          <div className="CartBox">
            <img  src={elem.purchase[0].img }/>
            {elem.purchase[0].title}
            <button onClick={()=>{deleteCart(elem._id)}} >delete</button>
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
