import React from "react"
class Updating extends React.Component{
    changeColor=()=>{
        this.setState({color:"Blue"})
    }
    //1.
    constructor(props){
        super(props)
        this.state={color:"red"}
    }
    // 2. 
    // static getDerivedStateFromProps(props, state){
    //     return {color:props.color}
    // }
    shouldComponentUpdate(){
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){ //props, state
        this.color=prevState.color
    }
    //3.
    render(){
        return(
            <div>
                <h1>My Car color is {this.state.color} </h1>
                <h2>Backup color data: {this.color}</h2>
                <button type="button" onClick={this.changeColor}>Change color To Blue</button>
            </div>
        )
    }


}
export default Updating