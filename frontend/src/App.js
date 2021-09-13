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

const App = () => {
  const [token, setToken] = useState("");
  const [checkRegister, setCheckRegister] = useState(false);
  const history = useHistory()
  history.push("/Home")
  return (
    <div className="App">
      <tokenContext.Provider value={token} >
      <checkRegisterContext.Provider value={checkRegister}>
      <Navigation />
<Switch>
      <Route exact path="/Home"  component={Main}  />
      <Route exact path="/category/:title/:id" component={ProductCategory} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Register" render={() => <Register setCheckRegister={setCheckRegister} />} />
      <Route exact path="/product/:id" component={GetAllProduct} />
      <Route exact path="/login" render={() => <Login  setToken={setToken} />} />
      <Route exact path="/cart" component={Cart} />
      <Route path= "*" component={()=>"404 NOT FOUND"} />
</Switch>
      </checkRegisterContext.Provider>
</tokenContext.Provider>


    </div>
  );
};
export default App;
