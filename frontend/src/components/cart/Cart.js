import React from "react";
import axios from "axios";
import "./Cart.css"
import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import {tokenContext} from '../../App'



const Cart =  () => {
    let token = useContext(tokenContext)
    const [insideCart, setInsideCart] = useState([]);
    const [price , setPrice] = useState(0)
    const history = useHistory()
    
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
  const checkout = ()=>{
    history.push('/shipping')
  }

  
  return (
    <div className="container">
    <div className="CartPerant">
      <h2>SHOPPING CART</h2>
      {insideCart&&insideCart.map((elem )=>{
          return( <>
          <div className="CartBox">
            <div>
            <img  src={elem.purchase[0].img }/>
            </div>
            <div>
            <h3>{elem.purchase[0].title}</h3>
            <p>{elem.purchase[0].description}</p></div>
            <div>
            <p>{elem.purchase[0].newprice} JD</p>
            <button className='btnCart'onClick={()=>{deleteCart(elem._id)}} >Delete</button>
            </div>
          </div>
          <hr></hr>
            </>)       
      })
    }
    {(insideCart && insideCart)?(<button onClick={checkout}> check out </button>):(<p>""</p>)}
    </div>
    </div>
  );
};



export default Cart;
