import React from 'react'
import { useState } from 'react'
import "./Footer.css";

const Contactus =()=> {


    // the email must be send to admin schema in sid dashbord indside the database 
const [name , setName] = useState("")
const [email , setEmail] = useState("")
const [custumerMassage , setCustumerMassage] = useState("")

    return (
        <div className="contactUs">
            <input placeholder="Your Name " onChange={(e)=>{setName(e.target.value)}}></input>
            <input placeholder=" Email" onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input placeholder=" Your Message" onChange={(e)=>{setCustumerMassage(e.target.value)}}></input> 
       
            <button type="submit"> SEND MESSAGE </button>
        </div>
    )
}

export default Contactus
