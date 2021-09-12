import React from "react";
import { Route } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Main from "./components/main";
import ProductCategory from "./components/category/ProductCategory";
import Register from "./components/auth/Register/Register";
import GetAllProduct from "./components/product/index";
import Login from "./components/auth/Login/Login";
import { Switch } from "react-router";
import Cart from "./components/cart/Cart"
export const UserContext = createContext();

const App = () => {
  const [token, setToken] = useState("");

  return (
    <div className="App">
      <Navigation token={token} />
<Switch>
      <Route exact path="/Home" render={()=><Main token={token}/>} />
      <Route exact path="/category/:title/:id" component={ProductCategory} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/product/:id" component={GetAllProduct} />
      <Route exact path="/login" render={() => <Login setToken={setToken} />} />
      <Route exact path="/cart" render={()=> <Cart token={token}/>}/>
      <Route path= "*" component={()=>"404 NOT FOUND"} />
</Switch>
    </div>
  );
};
export default App;
