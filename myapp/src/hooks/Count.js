import React,{useState} from "react"
/*class Count extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    render(){
        return(
            <div>
              <p>You clicked the button {this.state.count} times</p>  
              <button onClick={()=>this.setState({count:this.state.count+1})}>
                  Click Me
              </button>
            </div>
        )
    }
}*/
function Count(){
    //var count=100
    const [count, setCount]=useState(100)//return 2 values
    // count=100
    //setCount - this is a function - used for setting count
    return(
        <div>
        <p>You clicked the button {count} times</p>  
        <button onClick={()=>setCount(count+1)}>
            Click Me
        </button>
      </div>
    )
}
export default Count