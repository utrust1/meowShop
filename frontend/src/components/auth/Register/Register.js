import "./Register.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = ({setCheckRegister , setCheckLogout}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messege, setMessege] = useState("");

  const registerationEventButton = () => {
    axios
      .post(`http://localhost:5000/users/`, {
        firstName,
        lastName,
        age,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        setCheckRegister(true)
        setCheckLogout(true)
      }).catch((error)=>{
          console.log(error.response);
          setMessege(" The Email is already exist Please enter another Email ");
      })
  };

  return (
    <div className="Register">
      <h3>CREATE ACCOUNT</h3>
      <div className="childRegister">
        <div className="childRegisterTwo">
        <input
          placeholder="firstName"
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <input
          placeholder="lastName"
          type="text"
          onChange={(e) => {
            setlastName(e.target.value);
          }}
        ></input>
        <input
          placeholder="age"
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></input>
        <input
          placeholder="Example@gmail.com"
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button className='createAcc'
          type="submit"
          onClick={() => {
            registerationEventButton();
          }}
        >
          {" "}
          Sign Up{" "}
        </button>
        <div className="messgeDiv">{messege}</div>
        <p className='ret'>or <Link to="/Home" className='returnstore'> Return to store</Link></p>
      </div>
      </div>
    </div>
  );
};

export default Register;