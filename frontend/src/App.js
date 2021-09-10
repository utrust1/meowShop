import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import Main from './components/main';
const App = () => {
    return <div className = "App">
    <Navigation/>
    <Header/>
    <Main/>
     </div>;
};
export default App;