import React, { useState, useEffect } from 'react';
import { Route  , useParams} from 'react-router-dom';
import axios from 'axios';

const ProductCategory=(props)=> {
    const fofo = props.toto
    const {id} = useParams()
    console.log("id done " , id);
       console.log("id done " , props.toto);
	// useEffect(() => {
	// 	axios.get(`http://localhost:5000/category`).then((res) => {
	// 		setGetCategory(res.data.result);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }, []);
    return (
        <div> 
            <p> hello {id} </p>
        </div>
    )
}

export default ProductCategory
