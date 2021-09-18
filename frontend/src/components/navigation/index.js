import React  , { useContext , useState ,useEffect ,useParams}from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./navigation.css";
import axios from "axios";
import { tokenContext } from "../../App"
import { checkRegisterContext } from "../../App"
import { checkLogoutContext } from "../../App"
import { cartNumberContext } from "../../App"
import { wishListNumberContext } from "../../App"
import {FaShoppingBasket, FaSearch ,FaBars ,FaHeart} from "react-icons/fa";


const Navigation = ({setCheckLogout  , setToken ,setCheckRegister , setCartNumber ,  setWishListNumber ,setSearchBar } ) => {
	const history = useHistory()
  let saveToken = localStorage.getItem("saveToken")
  let saveCheckRegister  = localStorage.getItem("saveCheckRegister")
  let token = useContext(tokenContext);
  let checkRegister = useContext(checkRegisterContext)
  let checkLogout = useContext(checkLogoutContext)
  let cartNumber = useContext(cartNumberContext)
  let wishlistNumber = useContext(wishListNumberContext)
  const [search, setSearch] = useState()
  const [getCategory, setGetCategory] = useState();

  const Logout = () => {
  setCheckLogout(false)
  setToken("")
  setCheckRegister(false)
  setCartNumber(0)
  setWishListNumber(0)
  localStorage.clear("saveToken")
  localStorage.clear("saveCheckRegister")
}

console.log("vv" , checkLogout);
useEffect(() => {
  axios.get(`http://localhost:5000/category`).then((res)=>{  
  setGetCategory(res.data.result);
  }).catch((error)=>{
    console.log(error);
  })
},[]);

const showcategory = (title,id)=>{
  history.push(`/category/${title}/${id}`);
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

    <div className="container main-Cont">
      <div className="Navigation">
        <Link to="/Home" className='logoName'>
         <img src='https://cdn.shopify.com/s/files/1/0301/4295/5565/files/logo_ong_180x.png?v=1580764148'/>
        </Link>
        <div className="Searchbar">
          <input
            type="text"
            placeholder=" Search all products..."
            className="SearchBarInput"
			onChange={(e)=>{
				setSearch(e.target.value)
			}}
          ></input>
          <FaSearch className="searchIcon" onClick={searchByTitle} />
        </div>
        {/* <FaBars className='fabars'/> */}
        <div className="navbar">
          { ((token|| saveToken || checkRegister || saveCheckRegister ) && checkLogout ) ? (
            <div>
              <span className="shopCartMain">
              <FaHeart onClick={addToWish} className="HeartIcon"/>
              {/* <span className='wishNumberSpan' >{wishlistNumber}</span> */}

              <FaShoppingBasket className='CartShop'onClick={addToCart} />
              <span className='valueShop'>{cartNumber}</span>
              </span>         
              <span onClick={Logout} className='LogoutIcon'>Logout</span>
            </div>
           
          ) : (
            <div>
              <Link to="/login" className="navLogin">
                Sign in or
              </Link>
              <Link to="/Register" className="navRegister">
                Create an Account
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* <div className='showcategoryundernavbar'>{getCategory&&
      getCategory.map((get)=>{
        return(
          <p onClick={()=>{showcategory(get.title,get._id)}}>{get.title}</p>
        )
      })} </div> */}
    </div>
  );
};
export default Navigation;
