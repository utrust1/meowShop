import React from "react";
import { useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import './Purshace.css';
import Stripe from '../payment/Stripe';
import "bootstrap/dist/css/bootstrap.min.css";
export const Purshace = ({setCartNumber}) => {
  const {total} = useParams();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const eventOnButton = () => {
    axios
      .post("http://localhost:5000/purchase", {
        address,
        city,
        phoneNumber,
        country,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

 
  return ( 
  
  <div className="container">
  <div className="PurshacePerant">
      <h4>Contact information</h4>
      <div className="PurshaceChild">
      <Stripe total={total} setCartNumber={setCartNumber}/>
    </div>
    </div>
    </div>
  );
};