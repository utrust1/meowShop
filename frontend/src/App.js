import React from 'react';
import { Route } from 'react-router-dom';
import {useState , createContext} from "react"
import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import Main from './components/main';
import ProductCategory from './components/category/ProductCategory';
import Register from './components/auth/Register/Register';
import GetAllProduct from './components/product/index';
import Login from './components/auth/Login/Login';
import { Switch } from 'react-router';


export const UserContext = createContext();

const App = () => {

const [token , setToken]  = useState("")

    return <div className = "App">
    <Navigation/>
    <UserContext.Provider value={token}>

    <Route  path="/Home" component={Main} />
    <Route  path="/category/:title/:id" component={ProductCategory}/>
    <Route  path="/Register" component={Register} />
    <Route path="/product/:id" component={GetAllProduct}/>
    <Route path="/login" render={() => <Login setToken={setToken} /> }/>
    </UserContext.Provider>
     </div>;
};
export default App;