import React from "react"

class ContactComp extends React.Component{
    render(){
        return(
            <div>
                <p>hi</p>
                <img src={this.props.contact.imgURL}/>
                <h3>{this.props.contact.name}</h3>
                <p>{this.props.contact.phone}</p>
                <p>{this.props.contact.email}</p>
            </div>
            )
    }
}
// function ContactComp(props){
//     return(
//     <div>
//         <p>hi</p>
//         <img src={props.contact.imgURL}/>
//         <h3>{props.contact.name}</h3>
//         <p>{props.contact.phone}</p>
//         <p>{props.contact.email}</p>
//     </div>
//     )
// }
export default ContactComp
//10mins - 7:17