import React from 'react'
import {useState} from "react"

const  Purshace =()=>{
       
  const [address ,setAddress] = useState("")
   const [city , setCity ] = useState("")
   const [phoneNumber ,setPhoneNumber ] = useState("")
   const [country ,setCountry] =  useState("")




return (
        <div>

        <input type="text"   placeholder =" Your Country "></input>
        <input type="text"   placeholder =" Your City "></input>
        <input type="text"   placeholder =" Your Address "></input>
        <input type="number" placeholder =" Your Phone number"></input>
        <button onClick={()=>{}}>Check out</button>


            
        </div>
    )
}

export default Purshace
