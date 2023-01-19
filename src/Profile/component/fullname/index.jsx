import React from "react"
import style from "./style.css"
export default function FullName({OurProp : {nom ,hobbies,Prof }}) {
    return (
      <div className="gr">
        <h1> FullName :  {nom} </h1>
        <h2> Hobbies  : {hobbies}</h2>
        <h3> Profession  : {Prof}</h3> 
        </div>
      )
    }    
