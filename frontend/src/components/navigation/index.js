import React  , { useContext , useState  }from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./navigation.css";
import axios from "axios";
import { tokenContext } from "../../App"
import { checkRegisterContext } from "../../App"
import { checkLogoutContext } from "../../App"
import { cartNumberContext } from "../../App"
import { wishListNumberContext } from "../../App"
import {FaShoppingCart, FaSearch ,FaBars ,FaHeart} from "react-icons/fa";


const Navigation = ({setCheckLogout  , setToken ,setCheckRegister , setSearchBar } ) => {
	const history = useHistory()
  let token = useContext(tokenContext);
  let checkRegister = useContext(checkRegisterContext)
  let checkLogout = useContext(checkLogoutContext)
  let cartNumber = useContext(cartNumberContext)
  let wishlistNumber = useContext(wishListNumberContext)
  const [search, setSearch] = useState()

const Logout = () => {
  setCheckLogout(false)
  setToken("")
  setCheckRegister(false)

}

const searchByTitle = ()=>{
	axios.post(`http://localhost:5000/product/search?title=${search}`).then((result)=>{
		setSearchBar(result.data.result)
		console.log('sadsad',result.data.result)
		history.push('/search')
	})
}


const addToCart = () => {
  history.push("/cart")
};

const addToWish = ()=>{
  history.push('/wishlist')
};
  return (
    <div className="container">
      <div className="Navigation">
        <Link to="/Home" className='logoName'>
         Meow <span>Shop</span>
        </Link>

        <div className="Searchbar">
          <input
            type="text"
            placeholder=" Search ..."
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
              <span className="shopCartMain">
              <FaHeart onClick={addToWish} className="HeartIcon"/>
              <span className='wishNumberSpan' >{wishlistNumber}</span>

              <FaShoppingCart className='CartShop'onClick={addToCart} />
              <span className='valueShop'>{cartNumber}</span>
              </span>         
              <span onClick={Logout} className='LogoutIcon'>Logout</span>
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
