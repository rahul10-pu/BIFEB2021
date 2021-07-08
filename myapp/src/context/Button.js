import React,{useContext} from "react"
import { ValueCtx } from "./MyCtx"
// class Button extends React.Component{
//     static contextType=ValueCtx
//     name=this.context
//     render(){
//         return(
//             <div>
//                 <p>{this.name}</p>
//             </div>
//         )
//     }
// }
function Button(){
    const name=useContext(ValueCtx)
    return(
        <div>
            <p>{name}</p>
        </div>
    )
}
export default Button