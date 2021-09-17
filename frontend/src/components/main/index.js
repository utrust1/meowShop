import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./main.css";
import Header from "../header";
import Footer from "../Footer/Footer";
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";
import { useContext } from "react";
import { tokenContext } from "../../App";
import { checkRegisterContext } from "../../App";
import { cartNumberContext } from "../../App"
import { wishListNumberContext } from "../../App"

const Main = ({  setCartNumber,    setWishListNumber, }) => {
  let cartNumber = useContext(cartNumberContext)
  let wishlistNumber = useContext(wishListNumberContext)
  let token = useContext(tokenContext);
  let checkRegister = useContext(checkRegisterContext);
  const [getCategory, setGetCategory] = useState();
  const [getProduct, setGetProduct] = useState();
  const [allcategory, setAllcategory] = useState()
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
       console.log("3oo",res.data)
       if (token || checkRegister) {
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

  const getallProducts = (id) => {
    history.push(`product/${id}`);
  };


  const getAllcategorys =()=>{
    history.push(`/Categorys`);
  }

  const getallTheProducts = ()=>{
    history.push(`/Products`);
  }

  ///Get All Category
  return (
    <section>
      
    <div className="container">
      <Header />
     <div className="morecategory">
      <h4>SHOP FOR </h4>
      <p onClick={() =>{getAllcategorys()}}>More categories ..</p>
     </div>
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
                    
                    <h2
                      className="buttonCategory"
                      onClick={() => eventOnButton(cate.title, cate._id)}
                    >
                      {cate.title}
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <hr></hr>
      <div>
        <div className="moreproduct">
        <h4>TOP SELLERS </h4>
      <p onClick={() => getallTheProducts()}>More Products ..</p>
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
   
    </div>
      <Footer/>
      </section>
  );
};

export default Main;
