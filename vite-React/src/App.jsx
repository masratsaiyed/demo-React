import { useState } from "react";
import './index.css'
import Card from "./components/Card";
import BgChange from "./components/BgChange";
function App() {
    //  let [counter, setcounter] = useState(15);

//     const addValue = () =>{
//     if(counter <20) {
//        return setcounter(counter + 1);
//     }
    
//     return false;
// }
//     const removeVlaue =() =>{
//          if(counter >0) {
//        return setcounter(counter - 1);
//     }
    
//     return false;
//     }

 return (
    <>
  {/* <Card/>  */}
  <BgChange></BgChange>
  </>
 )
 
}

export default App
