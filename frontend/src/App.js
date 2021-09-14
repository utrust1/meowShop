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
import Footer from "./components/Footer/Footer";
import Cart from "./components/cart/Cart"
import Aboutus from "./components/Footer/Aboutus";
import Contactus from "./components/Footer/Contactus";
import Ourpolicy from "./components/Footer/Ourpolicy";
import { Search } from "./components/header/Search";
import WishList from "./components/Wishlist/Wishlist"

export const tokenContext = createContext();
export const checkRegisterContext = createContext();
export const checkLogoutContext  = createContext();
export const sendsArrayContext  = createContext();
export const searchContext  = createContext();

export const wishlistContext = createContext();

export const numberContext = createContext();


const App = () => {
  const [token, setToken] = useState("");
  const [checkRegister, setCheckRegister] = useState(false);
  const [checkLogout, setCheckLogout] = useState(true);
  const [sendsArray, setSendsArray] = useState([]);
  const [searchBar , setSearchBar] = useState()
  const [wishList , setWishList] = useState([]);
  const [number,  setNumber ] = useState(0);

  const history = useHistory()
  history.push("/Home")
  return (
    <div className="App">
       <checkRegisterContext.Provider value={checkRegister}>
       <tokenContext.Provider value={token} >
       <checkLogoutContext.Provider value={checkLogout}>
       <sendsArrayContext.Provider value={sendsArray}>
      <wishlistContext.Provider value={wishList}>
       <searchContext.Provider value= {searchBar}>
       <numberContext.Provider value={number}>
      <Navigation  setCheckLogout={setCheckLogout}  setToken={setToken} setCheckRegister={setCheckRegister} setSearchBar={setSearchBar} />
<Switch>
      <Route exact path="/Home"  render={() => <Main sendsArray={sendsArray}  setSendsArray={setSendsArray} wishList={wishList} setWishList={setWishList}/>}  />

      <Route exact path="/Home"  render={() => <Main sendsArray={sendsArray}  setSendsArray={setSendsArray} number={number}  setNumber={setNumber}/>}  />
      <Route exact path="/category/:title/:id" component={ProductCategory} />
      <Route exact path="/Register" render={() => <Register setCheckRegister={setCheckRegister} setCheckLogout={setCheckLogout}/>} />
      <Route exact path="/product/:id" component={GetAllProduct} />
      <Route exact path="/login" render={() => <Login  setToken={setToken}  setCheckLogout={setCheckLogout}/>} />
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/AboutUs" component={Aboutus} />
      <Route exact path="/ContactUs" component={Contactus} />
      <Route exact path="/OurPolicy" component={Ourpolicy} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/wishlist" component={WishList} />
      <Route path= "*" component={()=>"404 NOT FOUND"} />
</Switch> 
       </numberContext.Provider>
      </searchContext.Provider>
      </wishlistContext.Provider>
      </sendsArrayContext.Provider>
      </checkLogoutContext.Provider>
      </tokenContext.Provider>
      </checkRegisterContext.Provider>
<Footer/>

    </div>
  );
};
export default App;

// helllllllllllo 