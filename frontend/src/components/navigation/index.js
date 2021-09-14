import React  , { useContext }from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import axios from "axios";
import { tokenContext } from "../../App"
import { checkRegisterContext } from "../../App"
import { checkLogoutContext } from "../../App"
import {sendsArrayContext} from "../../App"
import {FaSignOutAlt,FaShoppingCart, FaSearch } from "react-icons/fa";


const Navigation = ({setCheckLogout  , setToken ,setCheckRegister} ) => {
  let token = useContext(tokenContext);
  let checkRegister = useContext(checkRegisterContext)
  let checkLogout = useContext(checkLogoutContext)
  let sendsArray = useContext(sendsArrayContext)  
const Logout = () => {
  setCheckLogout(false)
  setToken("")
  setCheckRegister(false)

}

const addToCart = () => {
  let  purchase = JSON.stringify(sendsArray) ;
  console.log("meow " , purchase);
  axios
    .post(`http://localhost:5000/cart`, { purchase } ,{ 
      headers: { Authorization: `Bearer ${token}`} } ,
    )
    .then(async (res) => {console.log("heheeee");})
    .catch((err) => {
      console.log(err);
    });
};

  return (
    <div className="container">
      <div className="Navigation">
        <Link to="/Home" className='logoName'>
         Lama
        </Link>

        <div className="Searchbar">
          <input
            type="text"
            placeholder="what do you want "
            className="SearchBarInput"
          ></input>
          <FaSearch className="searchIcon" />
        </div>
        <div className="navbar">
          { ((token || checkRegister) && checkLogout ) ? (
            <div>
              <Link to="/cart" className="navcart"></Link>
              <span className="shopCartMain">
              <FaShoppingCart className='CartShop'onClick={addToCart} />
              <span className='valueShop'>0</span>
              </span>             
              <FaSignOutAlt className='Logout' onClick={Logout} /> 
            </div>
          ) : (
            <div>
              <Link to="/login" className="navLogin">
                Login
              </Link>
              <Link to="/Register" className="navRegister">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navigation;
