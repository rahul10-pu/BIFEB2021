import React from "react"
import Toolbaar from "./Toolbaar"
import {ValueCtx} from "./MyCtx"
// class C1 extends React.Component{
 
//     render(){
//         return(
//             <div>
//                 <ValueCtx.Provider value="Gurpreet">
//                      <Toolbaar />
//                 </ValueCtx.Provider>
                
//             </div>
//         )
//     }
// }
function C1(){
    return(
        <div>
        <ValueCtx.Provider value="Rohan Sawant">
             <Toolbaar />
        </ValueCtx.Provider>
        
    </div>
    )
}
export default C1