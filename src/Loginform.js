import React,{Component} from 'react';

class Loginform extends Component 
{
    render(){
        return(
            <>
            <h1>Login Form</h1>
            <form>
            <div className="form-group">
            <label htmlFor="username">Username</label><br/>
            <input type = "text" id="username"/>
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label><br/>
            <input type = "password" id="password"/>
            </div>
            <button className="form-group btn-btn-primary" type="submit">Login</button>
            </form>
            </>
        );
    }
}
export default Loginform;