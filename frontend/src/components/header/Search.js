import React, { useState, useEffect , useContext } from "react";
import { useHistory } from "react-router";
import { searchContext } from "../../App";
import axios from "axios";


export const Search = () =>{
    let searchBar = useContext(searchContext)
    console.log("sosososooss",searchBar)
    return <div>{searchBar.map((elm)=>{
        return <div>{elm.title}</div>
    })}</div>
}