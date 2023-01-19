import './App.css';
import React from 'react';
import Fulln  from "./Profile/component/fullname/index.jsx"
import Info from './constants/const.js'
function App() {                                                                 
  return (
    <>
      {Info.map((el) => (
        <div className='cont'>
          <Fulln OurProp={el}/>
          <div className='haut'>
         <img id="mou" src={el.Monimg1} alt="" />
         </div>
         <div className='dess'>
         <img src={el.Monimg} alt=""/>
         </div>
         </div>
    ))} 
    </>
  ) };
export default App;
