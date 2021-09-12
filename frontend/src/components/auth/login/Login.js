import React from 'react'
import { useState } from "react";
import axios from "axios";
import "./Login.css";


const  Login =({setToken})=> {

const  [email , setEmail] = useState("")
const  [password , setPassword] = useState("")
const  [messege , setMessege] = useState("") 


const buttonEvent = ()=>{
axios.get(`http://localhost:5000/users/`, {email,password}).then((result)=>{
    console.log(result);
    setToken(result.data.token)
    console.log(result.data.token);
    setMessege(" Logged in succesfully ")
}).catch((error)=>{
    console.log(error);
})
}
    
return (
        <div>
            <input placeholder=" Your Mail" type="text" onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input placeholder="Your Password" type="text" onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button type="submit" onClick={()=>{buttonEvent()}}>Login </button>
            <div> {messege}</div>
        </div>
    )
}

export default Login
