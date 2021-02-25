import React,{ Component } from "react";

class About extends Component{
    constructor(){
        super();
        this.state = {
            id : '1', id : '2' , id : '3'
        }
    }
    render(){
       
        return(
            <>
            <h1>About</h1>
            <h2>about : {this.state.id}</h2>
            </>
        )
           
        
    }
}
export default About;