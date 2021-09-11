import "./signUp.css"
import React from "react"
import { useState ,  useEffect} from "react"



const Register =()=> {
   
   const [firstName , setFirstName ] = useState("")
   const [lastName , setlastName] = useState("")
   const [age , setAge] = useState("")
   const [email , setEmail] = useState("")
   const [password , setPassword] =  useState("")
   
   




     return (
         
        <div   className = "Register">

 <input placeholder="firstName" onChange={(e)=>{setFirstName(e.target.value)}}></input>
 <input placeholder="lastName" onChange={(e)=>{setlastName(e.target.value)}}></input>
 <input placeholder="age" onChange={(e)=>{setAge(e.target.value)}}></input>
 <input placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
 <input placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
 <button onClick={()=>{}}> Register </button>


            
        </div>
    )
}

export default Register
