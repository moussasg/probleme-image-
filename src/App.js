import './App.css';
import Index  from "./Profile/component/index.jsx"
import Const from './Profile/component/constantes.js/const';
import Img from "./Profile/component/monimg.JPG"
import Img1 from "./Profile/component/karim.jpg"
import Button from "../src/button/index.jsx"
function App() {                                                                 
  return (
    <>
      {Const.map((el) => (
        <div className='cont'>
          <Index OurProp={el}/>
          <div className='haut'>
         <img id="mou" src={el.Monimg}/>
         </div>
         <div className='dess'>
         <img src={el.Monimg1}/>
         </div>
         </div>
    ))} 
          <Button> </Button>
    </>
  ) };
export default App;
