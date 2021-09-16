import React from "react";
import axios from "axios";
import "./Cart.css"
import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import {tokenContext} from '../../App'
 

const Cart =  () => { 
  let b 
    let total  = 0; 
    let token = useContext(tokenContext)
    const [insideCart, setInsideCart] = useState([]);
    const [price , setPrice] = useState([])
    let carts = {}
    const history = useHistory()
    useEffect(()=>{getAllCart()},[])
  
    console.log(" caaaaa " ,carts);
    const getAllCart = () => {
          console.log("memmmw");
          axios
          .get(`http://localhost:5000/cart`,{ 
            headers: { Authorization: `Bearer ${token}`}})
            .then( (result) => {         
              setInsideCart(result.data.products)
              setPrice(result.data.products)
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
    <>
      {/* {insideCart&&insideCart.map((elem )=>{
  for(let index = 0 ; index < carts.length ; index++ ){
    console.log("tit1 " , elem.purchase[0].title);
    console.log("tit2" , carts[index]);
        if(elem.purchase[0].title !== carts[index]){
            carts.push(elem.purchase[0].title)
          return( <>
            <div className="CartBox">
              <img  src={elem.purchase[0].img }/>
               {elem.purchase[0].title} <span>     </span>  
               {elem.purchase[0].newprice}  <span>     </span> 
              <button onClick={()=>{deleteCart(elem._id)}} >delete</button>
              </div>
              <br />
              </>)       
          }else{
           continue
          }
        }
        console.log("patata");
     })
  } */}



{insideCart&&insideCart.map((elem )=>{
       total+= elem.purchase[0].newprice
        console.log("iddddd" , elem.purchase[0]._id);
       if(carts[elem.purchase[0]._id]){
      carts[elem.purchase[0]._id]+=1 
        return  ( <div>  {carts[elem.purchase[0]._id]} </div>  )            
      }else{
            carts[elem.purchase[0]._id]=1         
          }
          return( <>
            <div className="CartBox">
              <img  src={elem.purchase[0].img }/>
               {elem.purchase[0].title} <span>     </span>  
               {elem.purchase[0].newprice}  <span>     </span> 
               {carts[elem.purchase[0]._id]} 
              <button onClick={()=>{deleteCart(elem._id)}} >delete</button>
              </div>
              <br />
              </>)              
     })
  }
  
  
{/* 
{insideCart&&insideCart.map((elem )=>{
       total+= elem.purchase[0].newprice
       if(){
         
      return( <>
            <div className="CartBox">
              <img  src={elem.purchase[0].img }/>
               {elem.purchase[0].title} <span>     </span>  
               {elem.purchase[0].newprice}  <span>     </span> 
              <button onClick={()=>{deleteCart(elem._id)}} >delete</button>
              </div>
              <br />
              </>)       
          }else{
           console.log("mmmm");
          }
     })
  } */}
      
      <div className="CartBox">
        <p> Total: {total}  </p>      </div>
    {(insideCart && insideCart)?(<button onClick={checkout}> check out </button>):(<p>""</p>)}
    </>
  );
};



export default Cart;
