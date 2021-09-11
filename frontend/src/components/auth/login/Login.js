import React from 'react'
import { useState } from "react";
import axios from "axios";
import "./Login.css";



const  Login =()=> {
    

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    
    
    
    
    
    
    
    
    
    return (
        <div>
            <input placeholder="" type="text" onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input placeholder="" type="text" onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button type="submit" >Login </button>
        </div>
    )
}

export default Login
