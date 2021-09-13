import React from 'react'
import {useState} from "react"

const  Purshace =()=>{
       
  const [address ,setAddress] = useState("")
   const [city , setCity ] = useState("")
   const [phoneNumber ,setPhoneNumber ] = useState("")
   const [country ,setCountry] =  useState("")




return (
        <div>

        <input type="text"   placeholder =" Your Country " onChange={(e)=>{setCountry(e.target.value)}}></input>
        <input type="text"   placeholder =" Your City " onChange={(e)=>{setCity(e.target.value)}}></input>
        <input type="text"   placeholder =" Your Address " onChange={(e)=>{setAddress(e.target.value)}}></input>
        <input type="number" placeholder =" Your Phone number" onChange={(e)=>{setPhoneNumber(e.target.value)}}></input>
        <button onClick={()=>{}}>Check out</button>


            
        </div>
    )
}

export default Purshace
