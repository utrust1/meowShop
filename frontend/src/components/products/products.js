import React ,{ useState, useEffect }from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import { useHistory  } from "react-router";
const Products = () => {

    const history = useHistory();

    const [allProducts, setAllProducts] = useState()
    useEffect(() => {
        axios
          .get(`http://localhost:5000/product/ddd/products`)
          .then((res) => {
            setAllProducts(res.data.result);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

    //   const ShowCategorys = ( title,id ) => {
    //       history.push(`/category/${title}/${id}`);
    //   }

	return <div className="container">
        <h4>Product Categories</h4>
        <div className="">
           {allProducts&&
          allProducts.map((ele)=>{
            return (
                <div>
                    <img src={ele.img}/>
                    <h2>{ele.title}</h2>
                </div>
            )
          }) }
	</div>
    <Footer/>
    </div>
};

export default Products;
