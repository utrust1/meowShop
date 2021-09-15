import React from 'react';
import axios from 'axios';
import { useContext, useState, useEffect } from "react";
import { tokenContext } from '../../App';
const WishList = () => {
    let token = useContext(tokenContext);
    const [insideWishlist, setInsideWishlist] = useState()

    useEffect(() => {
        axios.get(`http://localhost:5000/wishlist/getwishlist`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            console.log("iwiewieiwie",res.data.products.product);
            let wish = res.data.products.product;
            setInsideWishlist(wish);

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