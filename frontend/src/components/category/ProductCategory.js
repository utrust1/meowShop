import React, { useState, useEffect } from 'react';
import { Route  , useParams} from 'react-router-dom';
import { useHistory  } from "react-router";
import axios from 'axios';
import './dashboard.css';
import Footer from '../Footer/Footer';
const ProductCategory=(props)=> {
    const [product , setProduct] = useState()
    const {id} = useParams()
    const history = useHistory()
    /// tseting the params
	useEffect(() => {
		axios.get(`http://localhost:5000/product/cat/${id}`).then((res) => {
			setProduct(res.data.result);
        }).catch((err) => {
            console.log(err);
        })
    }, []);


    

    const goBackHome =()=>{
        history.push("/Home")
    }
    const getbyid = (id) => {
        history.push(`/product/${id}`)
    }

    return (
        <div className="container">
        <div className="MainSectionForViewProduct">
            <div className='Contect-Main-Section'>
            {product && product.map((elm)=>{
                return (
                    <div className='viewProduct'>
                   <div className='content'>
                   <img src={elm.img}/>
                    <h4>{elm.title}</h4>
                    <button className='btn-shwo-cart'onClick={()=>{getbyid(elm._id)}}>Show</button>
                  
                   </div>
                </div>)
            })}
        </div>
        <button onClick={()=>{ goBackHome()}}> Back </button>
        </div>
        <Footer/>
        </div>
    )
}

export default ProductCategory
