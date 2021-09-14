import React from 'react';
import axios from 'axios';
import { useContext, useState, useEffect } from "react";
import { tokenContext } from '../../App';
const WishList = () => {
    let token = useContext(tokenContext);
    const [insideWishlist, setinsideWishlist] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/wishlist`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            console.log(res.data.products.product);
            let wish = res.data.products.product;
            setinsideWishlist(wish);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return(
        <div>

            {insideWishlist&&
            insideWishlist.map((elment)=>{
                return( <div> {elment.title}</div> );
            })}
        </div>
    )

}

export default WishList