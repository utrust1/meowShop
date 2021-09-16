import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router';
import axios from 'axios';
import './product.css'
const GetAllProduct=(props)=> {
    const history = useHistory()
    const [getproduct , setGetproduct] = useState()
    const {id} = useParams()
    useEffect(() => {
		axios.get(`http://localhost:5000/product/${id}`).then((res) => {
			setGetproduct(res.data.result);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const goBackButton =()=>{
        history.goBack()
    }
    return (
        <div className='showProduct'>
            {getproduct&&
           getproduct.map((product) => {
               return(
                   <div class='ProductMain'>
                       <div>
                           <img src={product.img}/>
                       </div>
                       <div className='contactProduct'>
                           <h1>{product.title}</h1>
                           <p>{product.description}</p>
                           <p className='old-price'> old price <del> {product.oldPrice}</del></p>
                           <p> new price {product.newprice}</p>
                           <p className="Saving">Saving: {product.oldPrice - product.newprice}</p>
                       </div>
                     
                   </div>
               )
           })}
              <button onClick={()=>{goBackButton()}}> Back</button>
        </div>
    )
}

export default GetAllProduct;
