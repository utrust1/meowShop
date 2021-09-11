import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import Main from './components/main';
import ProductCategory from './components/category/ProductCategory';
const App = () => {
    return <div className = "App">
    <Navigation/>
    <Header/>
    <Route  path="/Home" component={Main} />
    <Route  path="/category" component={ProductCategory} />
    <Main/>
     </div>;
};
export default App;