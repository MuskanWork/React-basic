import React,{Component} from 'react';
import './App.css';

class MyForm extends Component
{
    constructor()
    {
            super();
        this.state = {username : '' , age: null , errorMessage : ''};     
        
    }
    bySubmit = (value1) =>{
         value1.preventDefault();
        let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
        alert("you are submit " + this.state.username +this.state.age);
    }
    changeValue = (value1) => {
        let nam = value1.target.name;
        let val = value1.target.value;
        let err = '';
        if(nam === 'age')
        {
            if(val !='' && !Number(val) )
            {
                err = <strong>Please enter the number</strong>  
            }
        }
        this.setState({errorMessage : err})
        this.setState({[nam]: val});
        
    }

    render()
    {
       
        //  <h1>Hello {this.state.username}{this.state.age}</h1>;
      
        return(
            <form onSubmit={this.bySubmit}> 
           <h1>Hello {this.state.username}{this.state.age}</h1>
            <h3>Enter your name</h3>
            <input type='text' name='username' onChange = {this.changeValue} />
            <input type='text' name='age' onChange = {this.changeValue}/>{this.state.errorMessage}
            <br></br><input type='submit'/>
            </form>
        );
    }
}

export default MyForm;
