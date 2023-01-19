import React from "react"
export default function FullName({OurProp}) {
    return (
      <div className="gr">
        <h1> FullName :  {OurProp.nom} </h1>
        <h2> Hobbies  : {OurProp.hobbies}</h2>
        <h3> Profession  : {OurProp.Prof}</h3> 
        </div>
      )
    }    
