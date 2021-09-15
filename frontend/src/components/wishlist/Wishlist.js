import React from 'react';
import axios from 'axios';
import { useContext, useState, useEffect } from "react";
import { tokenContext } from '../../App';
import "./Wishlist.css"
/////////// hehehe 

const WishList = () => {
    let token = useContext(tokenContext);
    const [insideWishlist, setInsideWishlist] = useState([])

    const getWishlist = () => {
        axios.get(`http://localhost:5000/wishlist`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            console.log("roooooooooo 1" , res.data.products[0].product);
            console.log("rooooooooooooorooo 2" , res.data);
            setInsideWishlist(res.data.products)
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(()=>{getWishlist()},[])

    const deleteWishlist = (id) =>{
        axios
          .delete(`http://localhost:5000/wishlist/${id}`).then((result)=>{
            getWishlist()
    
    
          }).catch((err)=>{
            console.log(err)
          })
      }

    return(
        <div>
            <h1> mmm </h1>
            {insideWishlist&&
            insideWishlist.map((elem , i )=>{
             console.log("whooooooooooooooooo",elem.product[0]);
                return( <>
                <div className="wishlistBox"> {elem.product[0].title}
                <img src={elem.product[0].img} />
                <button onClick={()=>{deleteWishlist(elem._id)}}> delete  </button>
                </div>
                <br />
                </> );
            })}
        </div>
    )

}

export default WishList