import React  , { useContext , useState  }from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./navigation.css";
import axios from "axios";
import { tokenContext } from "../../App"
import { checkRegisterContext } from "../../App"
import { checkLogoutContext } from "../../App"
import {sendsArrayContext} from "../../App"
import {FaSignOutAlt,FaShoppingCart, FaSearch ,FaBars} from "react-icons/fa";



const Navigation = ({setCheckLogout  , setToken ,setCheckRegister ,setSearchBar} ) => {
	const history = useHistory()
  let token = useContext(tokenContext);
  let checkRegister = useContext(checkRegisterContext)
  let checkLogout = useContext(checkLogoutContext)
  let sendsArray = useContext(sendsArrayContext)

  const [search, setSearch] = useState()

const Logout = () => {
  setCheckLogout(false)
  setToken("")
  setCheckRegister(false)

}

const searchByTitle = ()=>{
	axios.post(`http://localhost:5000/product/search?title=${search}`).then((result)=>{
		setSearchBar(result.data.result)
		history.push('/search')
	})
}


const addToCart = () => {
  let  purchase = JSON.stringify(sendsArray) ;
  console.log("meow " , purchase);
  axios
    .post(`http://localhost:5000/cart`, { purchase } ,{ 
      headers: { Authorization: `Bearer ${token}`} } ,
    )
    .then((res) => {history.push('/cart')})
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
			onChange={(e)=>{
				setSearch(e.target.value)
			}}
          ></input>
          <FaSearch className="searchIcon" onClick={searchByTitle} />
        </div>
        <FaBars className='fabars'/>
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
