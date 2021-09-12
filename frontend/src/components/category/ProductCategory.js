import React, { useState, useEffect } from 'react';
import { Route  , useParams} from 'react-router-dom';
import axios from 'axios';
import './dashboard.css';
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
        <div className="MainSectionForViewProduct">
Hello
            <div className='Contect-Main-Section'> 
            {product && product.map((elm)=>{
                return (
                <div className='viewProduct'>
                   <div className='content'>
                   <img src={elm.img}/>
                    <h1>{elm.title}</h1>
                    <p>{elm.description}</p>
                    <p>{elm.oldPrice}</p>
                    <p>{elm.newprice}</p>
                   </div>
                </div>)
            })}
        </div>
        </div>
    )
}

export default ProductCategory
