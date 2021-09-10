import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Header from './components/header';
const App = () => {
    return <div className = "App">
    <Navigation/>
    <Header/>
     </div>;
};
export default App;