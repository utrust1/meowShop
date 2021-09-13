import React  , { useContext ,useState }from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { tokenContext } from "../../App"
import { checkRegisterContext } from "../../App"
import {FaSignOutAlt,FaShoppingCart, FaSearch } from "react-icons/fa";


const Navigation = () => {
    
const Logout = () => {
  setCheckLogout(false)
}
  let token = useContext(tokenContext);
  let checkRegister = useContext(checkRegisterContext)
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
              <FaShoppingCart />
             <button onClick={Logout}> <FaSignOutAlt/> </button>
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
