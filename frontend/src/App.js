import React from "react";
import { Route } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";
import Navigation from "./components/navigation";
import Main from "./components/main";
import ProductCategory from "./components/category/ProductCategory";
import Register from "./components/auth/Register/Register";
import GetAllProduct from "./components/product/index";
import Login from "./components/auth/Login/Login";
import { Switch , useHistory  } from "react-router";
import Cart from "./components/cart/Cart"
import Categorys from "./components/Categorys/Categorys";
// import Aboutus from "./components/Footer/Aboutus";
// import Contactus from "./components/Footer/Contactus";
// import Ourpolicy from "./components/Footer/Ourpolicy";
import { Search } from "./components/header/Search";
import WishList from "./components/Wishlist/Wishlist";
import {Purshace} from './components/Wishlist/Purshace'
import Products from "./components/products/products"

export const tokenContext = createContext();
export const checkRegisterContext = createContext();
export const checkLogoutContext  = createContext();
export const searchContext  = createContext();
export const cartNumberContext = createContext();
export const wishListNumberContext = createContext();


const App = () => {
  const [token, setToken] = useState("");
  const [checkRegister, setCheckRegister] = useState(false);
  const [checkLogout, setCheckLogout] = useState(true);
  const [searchBar , setSearchBar] = useState()
  const [cartNumber,  setCartNumber ] = useState(0);
  const [wishListNumber, setWishListNumber] = useState(0);

  const history = useHistory()
  history.push("/Home")
  return (
    <div className="App">
       <checkRegisterContext.Provider value={checkRegister}>
       <tokenContext.Provider value={token} >
       <checkLogoutContext.Provider value={checkLogout}>
       <searchContext.Provider value= {searchBar}>
       <cartNumberContext.Provider value={cartNumber}>
       <wishListNumberContext.Provider value={wishListNumber}>
      <Navigation  setCheckLogout={setCheckLogout}  setToken={setToken}  setCartNumber={setCartNumber}    setWishListNumber={setWishListNumber} setCheckRegister={setCheckRegister} setSearchBar={setSearchBar} />
<Switch>
      <Route exact path="/Home"  render={() => <Main   setCartNumber={setCartNumber}    setWishListNumber={setWishListNumber}/>}  />
      <Route exact path="/category/:title/:id" component={ProductCategory} />
      <Route exact path="/Register" render={() => <Register setCheckRegister={setCheckRegister}  setCheckLogout={setCheckLogout}/>} />
      <Route exact path="/product/:id" render={()=> <GetAllProduct  setCartNumber ={setCartNumber}  setWishListNumber={setWishListNumber} />} />
      <Route exact path="/login" render={() => <Login   setToken={setToken}  setCheckLogout={setCheckLogout}/>} />
      <Route exact path="/cart" component={Cart}/>
      {/* <Route exact path="/AboutUs" component={Aboutus} />
      <Route exact path="/ContactUs" component={Contactus} />
      <Route exact path="/OurPolicy" component={Ourpolicy} /> */}
      <Route exact path="/search" component={Search} />
      <Route exact path="/wishlist" component={WishList} />
      <Route exact path="/shipping" component={Purshace} />
      <Route exact path="/Categorys" component={Categorys}/>
      <Route exact path="/products" component={Products} />
      <Route path= "*" component={()=>"404 NOT FOUND"} />
</Switch> 
      </wishListNumberContext.Provider>
       </cartNumberContext.Provider>
      </searchContext.Provider>
      </checkLogoutContext.Provider>
      </tokenContext.Provider>
      </checkRegisterContext.Provider>
    </div>
  );
};
export default App;

// helllllllllllo 