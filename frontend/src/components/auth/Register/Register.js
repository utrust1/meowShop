import "./Register.css";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const Register = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messege, setMessege] = useState("");
  const [checkRegister, setcheckRegister] = useState(false);

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
        setcheckRegister(true)
        history.push("/Home");
      })
      .catch((error) => {
        console.log(error.response);
        setMessege(" The Email is already exist Please enter another Email ");
      });
  };

  return (
    <div className="Register">
      <div className="childRegister">
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
        <button
          type="submit"
          onClick={() => {
            registerationEventButton();
          }}
        >
          {" "}
          Sign Up{" "}
        </button>
        <div className="messgeDiv">{messege}</div>
      </div>
    </div>
  );
};

export default Register;
