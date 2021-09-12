import React from 'react'
import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useHistory } from 'react-router';


const  Login =({setToken})=> {

const  [email , setEmail] = useState("")
const  [password , setPassword] = useState("")
// const  [messege , setMessege] = useState("") 

const history = useHistory()
const buttonEvent = ()=>{
    // e.preventDefault()
axios.post(`http://localhost:5000/login/`, {email,password}).then((result)=>{
    console.log(result);
    setToken(result.data.token)
    console.log(result.data.token);
    // setMessege(" Logged in succesfully ")
    // const history = useHistory()
    history.push("/Home")

}).catch((error)=>{
    console.log(error.response);
})
}
    
return (
        <div>
            <input placeholder=" Your Mail" type="text" onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input placeholder="Your Password" type="text" onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button type="submit" onClick={()=>{buttonEvent()}}>Login </button>

            {/* <div> {messege}</div> */}
        </div>
    )
}

export default Login
