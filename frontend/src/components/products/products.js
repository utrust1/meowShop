import React ,{ useState, useEffect }from 'react';
import axios from 'axios';
import { useHistory  } from "react-router";
const Products = () => {

    const history = useHistory();

    const [allProducts, setAllProducts] = useState()
    useEffect(() => {
        axios
          .get(`http://localhost:5000/product/ddd/products`)
          .then((res) => {
            setAllProducts(res.data.products);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      const getbyid = (id) => {
        history.push(`/product/${id}`)
    }

return      (
        <div className="container">
        <div className="MainSectionForViewProduct">
           
            <div className='Contect-Main-Section'>
            {allProducts && allProducts.map((elm)=>{
                return (
                    <div className='viewProduct'>
                   <div className='content'>
                   <img src={elm.img}/>
                    <h4>{elm.title}</h4>
                    <button className='btn-shwo-cart' onClick={()=>getbyid(elm._id)}>More details</button>
                  
                   </div>
                </div>)
            })}
        </div>
        </div>
      
        </div>
    )
};

export default Products;
