import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./main.css";

import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";
import { useContext } from "react";
import { tokenContext } from "../../App";
import { checkRegisterContext } from "../../App";
import { cartNumberContext } from "../../App"
import { wishListNumberContext } from "../../App"
import omar from "../.././ourimg/eaea1cea-d8c9-4972-b9dc-a4f32cf12f23.jpg";
import maamoun from "../.././ourimg/49135455_2282326952036505_6271144683045388288_n.jpg";
import obada from "../.././ourimg/T0270UF1MS6-U026UMA6LSJ-c5787195b78a-512.jpg";
import Ruqia from "../.././ourimg/T0270UF1MS6-U026Y34FR61-b175be512ad3-512.jpg";
import Header from "../header/index";
const Main = ({  setCartNumber,    setWishListNumber, }) => {
  let saveToken = localStorage.getItem("saveToken")
  let saveCheckRegister  = localStorage.getItem("saveCheckRegister")
  console.log("st" , saveToken) ;
  console.log("sR" , saveCheckRegister );
  let cartNumber = useContext(cartNumberContext)
  let wishlistNumber = useContext(wishListNumberContext)
  let token = useContext(tokenContext);
  let checkRegister = useContext(checkRegisterContext);
  const [getCategory, setGetCategory] = useState();
  const [getProduct, setGetProduct] = useState();
  const [allcategory, setAllcategory] = useState()
  const [byprice, setByprice] = useState()
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/category`)
      .then((res) => {
        setGetCategory(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/byprice`)
      .then((res) => {
        setByprice(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product`)
      .then((res) => {
        setGetProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  const addToCart = (product) => {
    console.log("pp" , product);
   let purchase = product._id
   console.log("pp22" ,purchase);
    axios
      .post(`http://localhost:5000/cart`, {purchase} , {
        headers: { Authorization: `Bearer ${saveToken}` },
      })
      .then((res) => {
        console.log("whooo");
        if ( token|| saveToken || checkRegister || saveCheckRegister) {
          if (cartNumber) {
            setCartNumber(cartNumber + 1);
            console.log("second time : ", cartNumber);
          } else {
            setCartNumber(1);
            console.log("first time : ", cartNumber);
          }
        } else {
          console.log("you have to log in first ");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /************************************ (wish list)  *****************************************/


  const addToWishList = (products) => {
    let  product = products._id
    axios.post(`http://localhost:5000/wishlist` , {product},{ 
      headers: { Authorization: `Bearer ${saveToken}`} },
     ).then((res)=>{
       console.log("meow 22");
       console.log("3oo",res.data)
       if (token|| saveToken || checkRegister || saveCheckRegister) {
        if (wishlistNumber) {
          setWishListNumber(wishlistNumber + 1);
          localStorage.setItem("wishList",wishlistNumber + 1);
        } else {
          setWishListNumber(1);
          localStorage.setItem("wishList", wishlistNumber + 1);
        }
      } else {
        console.log("you have to log in first ");
      }
     }).catch((err)=>{
       console.error(err);
     }) 
  };

  // event on the shopnow butthon inside the category
  const eventOnButton = (title, id) => {
    history.push(`/category/${title}/${id}`);
  };

  ///when you click button it's will get product using id

  const getallProducts = async (id) => {
   await history.push(`product/${id}`);
  };


  const getAllcategorys =()=>{
    history.push(`/Categorys`);
  }

  const getallTheProducts = ()=>{
    history.push(`/Products`);
  }

  ///Get All Category
  return (
    <section className="main-section">
    <Header/>  
    <div className="container">
    
     <div className="morecategory">
      <h4>SHOP FOR </h4>
      <p onClick={() =>{getAllcategorys()}}>More categories ..</p>
     </div>
     <div className="row">
      <div className="category-section">
        {getCategory &&
          getCategory.map((cate) => {
            return (
              <div className="col-lg-3">
                <div className="shopforimg">
                <img
                  className="categoryImg"
                  src={cate.img}
                ></img>
                <div className="titleforCategory">
                  <div className="categorycontact">
                    
                    <h4
                      className="buttonCategory"
                      onClick={() => eventOnButton(cate.title, cate._id)}
                    >
                      {cate.title}
                    </h4>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
          </div>
          </div>
      <hr></hr>
      <div>
        <div className="moreproduct">
        <h4>TOP SELLERS </h4>
      <p onClick={() => getallTheProducts()}>More Products ..</p>
      </div>
      <div className="product-section">
        <div className="row">
        {getProduct &&
          getProduct.map((product) => {
            return (
              <div className="col-lg-4">
                <div className="productMain">
                <div class="cont">
             
                <div className="image">
                <img src={product.img}></img>
                </div>
{/*        
                  <div className="show-icon">
                    <div className="icon">
                      <i
                        className="	fa fa-cart-plus"
                        onClick={() => addToCart(product)}
                      />
                      <i
                        className="	fa fa-eye"
                        onClick={() => getallProducts(product._id)}
                      ></i>
                      <i className="fa fa-heart"
                        onClick={() => addToWishList(product)}
                      >
                      </i>
                    </div>
                  </div> */}
                    <div class="middle">
                      <div class="text">
                          <div className="icon">
                              <i
                              className="	fa fa-cart-plus"
                              onClick={() => addToCart(product)}
                              />
                              <i
                              className="	fa fa-eye"
                              onClick={() => getallProducts(product._id)}
                              ></i>
                              <i className="fa fa-heart"
                              onClick={() => addToWishList(product)}
                              >
                              </i>
                          </div>
                      </div>
                    </div>
</div>
         
              <div class='info-products'>
                
                <p>  {product.title}</p>
                <p>Price : {product.newprice}$ </p>
                  </div>
              </div>
              </div>
            );
          })}
      </div>
      </div>
    </div>
    <hr></hr>
    </div>
    {/* Start Section About us  */}

    <div className="about-us">
      <div className='overlay-about-us'>
        <div className='about-us-details'>
          <h1>Meow E-commerce</h1>
              <p>Meow E-commerce
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>

    {/* show product by price*/ }

    <div className="container"> 
          <div>
        <div className="moreproduct">
        <h4>Discount Products </h4>
      
      </div>
      <div className="product-section">
      <div className="row">
        {byprice &&
          byprice.map((product) => {
            return (
              <div className="col-lg-3">
              <div className="productMain">
              <div class="cont">
              <div className="image">
                <img src={product.img}></img>
                </div>
{/*               
                  <div className="show-icon">
                    <div className="icon">
                      <FaShoppingCart
                        className="icon-cart"
                        onClick={() => addToCart(product)}
                      />
                      <FaEye
                        className="icon-search"
                        onClick={() => getallProducts(product._id)}
                      />
                      <FaHeart
                        className="icon-heart"
                        onClick={() => addToWishList(product)}
                      />
                    </div>
                  </div> */}
                          <div class="middle">
                      <div class="text">
                          <div className="icon">
                              <i
                              className="	fa fa-cart-plus"
                              onClick={() => addToCart(product)}
                              />
                              <i
                              className="	fa fa-eye"
                              onClick={() => getallProducts(product._id)}
                              ></i>
                              <i className="fa fa-heart"
                               onClick={() => addToWishList(product)}
                              >
                              </i>
                          </div>
                      </div>
                    </div>
            
              </div>
              <div class='info-products'>
                
            <p>  {product.title}</p>
            <p>Price : {product.newprice}$ </p>
              </div>
              </div>
              </div>
            );
          })}
          </div>
      </div>
      </div>
    </div>
    <hr></hr>



      </section>
  );
};

export default Main;
