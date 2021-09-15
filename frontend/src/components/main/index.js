import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./main.css";
import Header from "../header";
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";
import { useContext } from "react";
import { tokenContext } from "../../App";
import { checkRegisterContext } from "../../App";

const Main = ({  cartNumber,  setCartNumber,  wishListNumber,  setWishListNumber, }) => {
  let token = useContext(tokenContext);
  let checkRegister = useContext(checkRegisterContext);
  const [getCategory, setGetCategory] = useState();
  const [getProduct, setGetProduct] = useState();
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
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("whooo");
        if (token || checkRegister) {
          if (cartNumber) {
            setCartNumber(cartNumber + 1);
            console.log("second time : ", cartNumber);
            localStorage.setItem("productcartNumber", cartNumber + 1);
          } else {
            setCartNumber(1);
            console.log("first time : ", cartNumber);
            localStorage.setItem("productcartNumber", cartNumber + 1);
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
      headers: { Authorization: `Bearer ${token}`} },
     ).then((res)=>{
       console.log("meow 22");
       console.log(res.data)
       if (token || checkRegister) {
        if (wishListNumber) {
          setWishListNumber(wishListNumber + 1);
          localStorage.setItem("wishList", wishListNumber + 1);
        } else {
          setWishListNumber(1);
          localStorage.setItem("wishList", wishListNumber + 1);
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

  const getallProducts = (id) => {
    history.push(`product/${id}`);
  };

  ///Get All Category
  return (
    <div className="container">
      <Header />
      <h2>What We Have Collections </h2>

      <div className="category-section">
        {getCategory &&
          getCategory.map((cate) => {
            return (
              <div className="categoryMain">
                <img
                  className="categoryImg"
                  style={{ height: "500px" }}
                  src={cate.img}
                ></img>
                <div className="titleforCategory">
                  <div className="categorycontact">
                    <h2>{cate.title}</h2>
                    <button
                      className="buttonCategory"
                      onClick={() => eventOnButton(cate.title, cate._id)}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="product-section">
        {getProduct &&
          getProduct.map((product) => {
            return (
              <div className="productMain">
                <img src={product.img}></img>
                <div class="showdetails">
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
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Main;
