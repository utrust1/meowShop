import React from 'react'
import { useState } from "react";
import axios from "axios";
import "./Login.css";



const  Login =()=> {

const [email , setEmail] = useState("")
const  [password , setPassword] = useState("")
const  [messege , setMessege] = useState("") 


const buttonEvent = ()=>{
axios.get(`http://localhost:5000/users/`, {email,password}).then((result)=>{
    
})
}
    
return (
        <div>
            <input placeholder=" Your Mail" type="text" onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input placeholder="Your Password" type="text" onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button type="submit" onClick={()=>{}}>Login </button>
            <div> {messege}</div>
        </div>
    )
}

export default Login
