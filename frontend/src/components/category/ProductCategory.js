import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCategory=({id})=> {
       console.log("id done " , id);
	// useEffect(() => {
	// 	axios.get(`http://localhost:5000/category`).then((res) => {
	// 		setGetCategory(res.data.result);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }, []);
    return (
        <div> 
            <p> {id} </p>
        </div>
    )
}

export default ProductCategory
