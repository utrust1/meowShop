import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { searchContext } from "../../App";
import axios from "axios";

export const Search = () => {
  let searchBar = useContext(searchContext);

  return (
    <div className="container">
        <div className='Contect-Main-Section'>
      {searchBar.map((elm) => {
        return (
          <div className="viewProduct">
            <div className="content">{elm.title} <img src={elm.img} />
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
