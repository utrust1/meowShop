import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";


const Login = ({ token, setToken, setCheckLogout ,setGoogleToken}) => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messege, setMessege] = useState("");
 const history = useHistory();

  const checkValidation = () => {
    axios
      .post(`http://localhost:5000/login/`, { email, password })
      .then((result) => {
        console.log(result);
        setToken(result.data.token);
       
        setCheckLogout(true);
        localStorage.setItem("saveToken", token);
      })
      .catch((error) => {
        setMessege("your email or password is not correct");
      });
  };

  const clientId =
    "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";
  
    const onSuccess = async (res) => {
    //  console.log(res);
    await axios
      .post("http://localhost:5000/login/google", {
      tokenId : res.tokenId
      })
      .then((res) => {
        const token = res.data.token;
        setGoogleToken(token)
        console.log(res.data.token,'res.data.token');
        setCheckLogout(true)
        localStorage.setItem("saveToken", res.data.token);
        history.push("/Home")
       
      })

      .catch((error) => {
        console.log(error);
        if (error) {
          setMessege("Email or Password incorrect, please try again");
        }
      });
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };
return (
    <div className="LoginMain">
      <div className="loginChild">
        <h3>Login</h3>
        <input
          placeholder=" Your Mail"
          type="text"
          className="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          placeholder="Your Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button
          className="sumbitLogin"
          type="submit"
          onClick={() => {
            checkValidation();
          }}
        >
          Sign in{" "}
        </button>
        <div className="with-gmail">
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={(res) => onSuccess(res)}
            onFailure={(res) => onFailure(res)}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <p className="ErrorMsg">{messege}</p>
        
      </div>
    </div>
  );
};

export default Login;
