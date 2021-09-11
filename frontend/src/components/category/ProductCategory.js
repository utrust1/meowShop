import React, { useState, useEffect } from 'react';
import { Route  , useParams} from 'react-router-dom';
import axios from 'axios';

const ProductCategory=(props)=> {
    const [product , setProduct] = useState()
    const {id} = useParams()
    /// tseting the params
	useEffect(() => {
		axios.get(`http://localhost:5000/product/cat/${id}`).then((res) => {
			setProduct(res.data.result);
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    return (
        <div> 
            {product && product.map((elm)=>{
                <img src={elm.img}/>
                return (<div>{elm.title}</div>)
            })}
        </div>
    )
}

export default ProductCategory
