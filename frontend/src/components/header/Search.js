import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { searchContext } from "../../App";
import axios from "axios";
import './Search.css';

export const Search = () => {
  let searchBar = useContext(searchContext);
  const history = useHistory()
  const getbyid = (id) => {
    history.push(`/product/${id}`)
}


  return (
    <div className="search">
    <div className="container">
        <div className='Contect-Main-Section'>
      {searchBar&&searchBar.map((elm) => {
        return (
          <div className="viewProduct">
            <div className="content">
                <img src={elm.img}/>
                <h5>{elm.title}</h5>
                <button className='btn-shwo-cart' onClick={()=>getbyid(elm._id)}>More details</button>
            </div>

          </div>
        );
      })}
      </div>
    </div>
    </div>
  );
};
