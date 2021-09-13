import React  , { useContext }from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
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
  let ;
  axios
    .post(`http://localhost:5000/cart`, senderFile, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(async (res) => {})
    .catch((err) => {
      console.log(err);
    });
};

  return (
    <div className="container">
      <div className="Navigation">
        <Link to="/Home">
          <p className="logoName">
            LA<span>MA.</span>
          </p>{" "}
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
              <FaShoppingCart onClick={addToCart} />
              <FaSignOutAlt  onClick={Logout} /> 
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
