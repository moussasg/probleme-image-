import './App.css';
import React from 'react';
import Fulln  from "./Profile/component/fullname/index.jsx"
import Info from './constants/const.js'
import But from "./Profile/component/button/index.jsx"
function App() {                                                                 
  return (
    // {el.Nom de Key} key dans la const , pas la valeur de key 
    <> 
      {Info.map((el) => ( // tdkhol dakhel const info
 /*rana n3to l Fulln un props */
       <div className='cont'>  
          <Fulln OurProp={el}/>
          <But OurProps={el}/>
          <div className='haut'> 
         <img id="mou" src={el.img} alt="" /> 
         </div>
         </div>
    ))} 
    </>
  ) };
export default App;
