import React from 'react'
import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useHistory } from 'react-router';


const  Login =({setToken , setCheckLogout})=> {

const  [email , setEmail] = useState("")
const  [password , setPassword] = useState("")
// const  [messege , setMessege] = useState("") 

const history = useHistory()
const buttonEvent = ()=>{

axios.post(`http://localhost:5000/login/`, {email,password}).then((result)=>{
    console.log(result);
    setToken(result.data.token)
    setCheckLogout(true)
    console.log(result.data.token);
}).catch((error)=>{
    console.log(error.response);
})
}
    
return (
        <div className="LoginMain">
            <div className="loginChild">
            <input placeholder=" Your Mail" type="text" className='email'onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input placeholder="Your Password" type="text" onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button type="submit" onClick={()=>{buttonEvent()}}>Login </button>
            </div>
            {/* <div> {messege}</div> */}
        </div>
    )
}

export default Login
