import "./signUp.css"
import React from "react"
import { useState ,  useEffect} from "react"
import axios from "axios"



const Register =()=> {
   
   const [firstName , setFirstName ] = useState("")
   const [lastName , setlastName] = useState("")
   const [age , setAge] = useState("")
   const [email , setEmail] = useState("")
   const [password , setPassword] =  useState("")
   const[messege , setMessege] =  useState("")
   
const registerationEventButton =()=>{
axios.post(`http://localhost:5000/users/` , {firstName,
lastName,
age,
email,
password
}).then((result)=>{
    console.log(result);

})
setMessege(" The user has been created successfully ")
}



     return (

        <div   className = "Register">

 <input placeholder="firstName"   type="text" onChange={(e)=>{setFirstName(e.target.value)}}></input>
 <input placeholder="lastName"  type="text" onChange={(e)=>{setlastName(e.target.value)}}></input>
 <input placeholder="age" type="number" onChange={(e)=>{setAge(e.target.value)}}></input>
 <input placeholder="Example@gmail.com" type="text" onChange={(e)=>{setEmail(e.target.value)}}></input>
 <input placeholder="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
 <button type="submit" onClick={()=>{registerationEventButton()}}> Register </button>
<p>{messege}</p>

            
        </div>
    )
}

export default Register
