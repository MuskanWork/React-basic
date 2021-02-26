import React, { Component } from 'react';
// import 'src/App.css';
class Loginform extends Component {
    // username = React.createRef();
    // componentDidMount() {
    //     this.username.current.focus();
    // }
    constructor(){
        super();
        this.state = {
           account:{

           username : '' , password: ''}
        };
    }
    handleChange(e){
        const account = {...this.state.account};
        account.username = e.currentTarget.value;
        this.setState({account});
    }

    halndleSubmit = e => {
        e.preventDefault();

        const username = this.username.current.value;
    }
    render() {
        return (
            <>
                <form onSubmit = {this.halndleSubmit}>
                    <div class="mb-3">
                        <label for="username" class="form-label"><strong>Username</strong></label>
                        <input onChange= {this.handleChange} value= {this.state.account.username} autoFocus ref= {this.username} type="email" class="form-control" id="username" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label"><strong>Password</strong></label>
                        <input autoFocus type="password" class="form-control" id="password" />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </>
        );
    }
}
export default Loginform;