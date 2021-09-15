import React from 'react';
import axios from 'axios';
import { useContext, useState, useEffect } from "react";
import { tokenContext } from '../../App';

const WishList = () => {
    let token = useContext(tokenContext);
    const [insideWishlist, setInsideWishlist] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/wishlist`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            console.log("reeeeeeeeeeee" , res.data.products);
            setInsideWishlist(res.data.products);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return(
        <div>
            <h1> mmm </h1>
            {insideWishlist&&
            insideWishlist.map((elem)=>{
             console.log("whooooooooooooooooo",elem.product[0]);
                return( <div> {elem.product[0].title}</div> );
            })}
        </div>
    )

}

export default WishList