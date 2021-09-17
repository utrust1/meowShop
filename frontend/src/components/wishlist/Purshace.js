import React from "react";
import { useState } from "react";
import axios from "axios";
import './Purshace.css';

export const Purshace = () => {
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
    <div className="PurshacePerant">
      <h4>Contact information</h4>
      <div className="PurshaceChild">
      <input
        type="text"
        placeholder=" Your Country "
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder=" Your City "
        onChange={(e) => {
          setCity(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder=" Your Address "
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      ></input>
      <input
        type="number"
        placeholder=" Your Phone number"
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      ></input>
      <button type="submit"
        onClick={() => {
          eventOnButton();
        }}
      >
        Check out
      </button>
    </div>
    </div>
  );
};

