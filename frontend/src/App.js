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
export const tokenContext = createContext();
export const checkRegisterContext = createContext();
export const checkLogoutContext  = createContext();

const App = () => {
  const [token, setToken] = useState("");
  const [checkRegister, setCheckRegister] = useState(false);
  const [checkLogout, setCheckLogout] = useState(true);
  const history = useHistory()
  history.push("/Home")
  return (
    <div className="App">
       <checkRegisterContext.Provider value={checkRegister}>
       <tokenContext.Provider value={token} >
       <checkLogoutContext.Provider value={checkLogout}>
      <Navigation  setCheckLogout={setCheckLogout}  setToken={setToken} setCheckRegister={setCheckRegister} />
<Switch>
      <Route exact path="/Home"  component={Main}  />
      <Route exact path="/category/:title/:id" component={ProductCategory} />
      <Route exact path="/Register" render={() => <Register setCheckRegister={setCheckRegister} setCheckLogout={setCheckLogout}/>} />
      <Route exact path="/product/:id" component={GetAllProduct} />
      <Route exact path="/login" render={() => <Login  setToken={setToken}  setCheckLogout={setCheckLogout}/>} />
      <Route exact path="/cart" component={Cart} />
      <Route path= "*" component={()=>"404 NOT FOUND"} />
</Switch>
      </checkLogoutContext.Provider>
      </tokenContext.Provider>
      </checkRegisterContext.Provider>


    </div>
  );
};
export default App;
