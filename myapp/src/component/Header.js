import React from "react"
import '../style.css'
function Header(props){
    return(
        <div>
            <h1 className="navbar">{props.name} - Software Engineer</h1>
        </div>
    )
}
export default Header