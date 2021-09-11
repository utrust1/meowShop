import React from 'react'
const ProductCategory=(cate)=> {
    console.log(cate);
    return (
        <div> 
            <p> {cate.id} </p>
            <h1> {cate.title}</h1>
        </div>
    )
}

export default ProductCategory
