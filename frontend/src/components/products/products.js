import React ,{ useState, useEffect }from 'react';
import axios from 'axios';
import './products.css';
import { AiOutlineArrowLeft  ,AiOutlineArrowRight} from "react-icons/ai";
import { useHistory  } from "react-router";
const Products = () => {
    const history = useHistory();
    const [CountPage, setCountPage] = useState(1);
    const [TotalPages, setTotalPages] = useState(0);
   /// let pageCount = [1,2,3,4,5,6];
    const [allProducts, setAllProducts] = useState()
    useEffect(() => {
        axios
          .get(`http://localhost:5000/product/ddd/products/${CountPage}`)
          .then((res) => {
            setAllProducts(res.data.products);
            setTotalPages(res.data.totalPages);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [CountPage]);
      const getbyid = (id) => {
        history.push(`/product/${id}`)
    }
    let myarr= [];
    for(let i = 1; i <= TotalPages; i++){
      myarr.push(i);
    }
    const changeCountPage =(pageNumber) => {
      axios
          .get(`http://localhost:5000/product/ddd/products/${pageNumber}`)
          .then((res) => {
            setAllProducts(res.data.products);
          })
          .catch((err) => {
            console.log(err);
          });
    }
return(
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
                </div>
                )
            })}
            <div className='pageCount'>
            <AiOutlineArrowLeft className='left-arrow'/>
               {myarr&&myarr.map((ele)=>{
              return(
                <h2 className='ssss' onClick={()=>(changeCountPage(ele))}>{ele}</h2>
              )
            })}            
            <AiOutlineArrowRight className='right-arrow'/>
            </div>
        </div>
        </div>
        </div>
    )
};
export default Products;