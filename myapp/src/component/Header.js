import React from "react"
import '../style.css'


class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={name:props.name}
    }
    render(){
        return(
            <div>
                <h1 className="navbar">{this.state.name} - Software Engineer</h1>
            </div>
        )
    }
}


// function Header(props){
//     return(
//         <div>
//             <h1 className="navbar">{props.name} - Software Engineer</h1>
//         </div>
//     )
// }
export default Header