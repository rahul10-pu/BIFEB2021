import React from "react"
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            age:null,
            errorMsg:""
        }
    }
    setName=(event)=>{
        // this.state.color="green"
        this.setState({username:event.target.value})
    }
    setAge=(event)=>{
        // this.state.color="green"
        this.setState({age:event.target.value})
    }
    setFormData=(event)=>{
        if(event.target.name==="age" && event.target.value<=18){
            this.setState({errorMsg:<strong>PLease enter age above 18</strong>})
            return
        }
        this.setState({errorMsg:""})
        this.setState({[event.target.name]:event.target.value})
    }//7:28
    setForm=(event)=>{
        event.preventDefault()
        alert("Hello "+ this.state.username)
    }
    render(){
        return(
           <form onSubmit={this.setForm}>
               <h1>Hello {this.state.username} and your age is {this.state.age}</h1>
               <p>Username:</p>
               <input type="text" name="username" onChange={this.setFormData}/>

               <p>Age:</p>
               <input type="text" name="age" onChange={this.setFormData}/>
               {this.state.errorMsg}
               <input type="submit"/>
           </form>
        )
    }
}
export default Form