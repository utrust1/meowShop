import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./main.css";
import Header from "../header";
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";
import { useContext } from "react";
import { tokenContext } from "../../App";
import { checkRegisterContext } from "../../App";
import { cartNumberContext } from "../../App"
import { wishListNumberContext } from "../../App"
import omar from "../.././ourimg/eaea1cea-d8c9-4972-b9dc-a4f32cf12f23.jpg";
import maamoun from "../.././ourimg/49135455_2282326952036505_6271144683045388288_n.jpg";
import obada from "../.././ourimg/T0270UF1MS6-U026UMA6LSJ-c5787195b78a-512.jpg";

const Main = ({  setCartNumber,    setWishListNumber, }) => {
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
        
        {byprice &&
          byprice.map((product) => {
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
    <hr></hr>
    </div>

    {/* our team start*/ }

    <div className='container ourTeam'>
      <h2>Our Team </h2>

      <div className='ourTeamImg'>

          <div className='imgtitle'>
            <img src={maamoun} alt='ssss'/>
            <div className='titleourteam'>
              <h2>Maamoun Alkiswani</h2>
              <p>Ut wisi enim ad minim veniam,</p>
              <button>Contact us</button>
            </div>
            
          </div>


          <div className='imgtitle'>
            <img src={omar} alt='ssss'/>
            <div className='titleourteam'>
              <h2>Omar Hushki</h2>
              <p>Ut wisi enim ad minim veniam,</p>
              <a href='https://www.facebook.com/omar.hushki/'><button> Contact us</button></a>
            </div>
            
          </div>

          
          <div className='imgtitle'>
            <img src={obada} alt='ssss'/>
            <div className='titleourteam'>
              <h2>Obada Obada </h2>
              <p>Ut wisi enim ad minim veniam,</p>
              <button>Contact us</button>
            </div>
            
          </div>


          
          <div className='imgtitle'>
            <img src='sdasdasds' alt='Ruiqa'/>
            <div className='titleourteam'>
              <h2>Ruiqa Ruiqa </h2>
              <p>Ut wisi enim ad minim veniam,</p>
              <button>Contact us</button>
            </div>
            
          </div>



        
      </div>

    </div>
    <hr></hr>


      </section>
  );
};

export default Main;
