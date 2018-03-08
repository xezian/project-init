import React, { Component } from 'react';
import $  from 'jquery';

const checkNamePassword = (name, password) => {
    console.log("hi "+name)
    // check name and password
    // get our form data out of state
    const data = {
        username: name,
        password: password,
    };
    $.post({
        data: data,
        url: `/api/login/`,
        dataType: "json"
    }).then(res => {
        console.log(res);
    })
}

export class UserLogin extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onPwChange = this.onPwChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onNameChange = (e) => {
        this.setState({name:e.target.value});
    }

    onPwChange = (e) => {
        this.setState({password:e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        let name = this.state.name;
        let password = this.state.password;
        checkNamePassword(name, password);
    }

    render() {
        const { name, password } = this.state;
        return (
            <form className="signInForm">
                <h2>Log On In</h2>
                <input type="text" value={name} onChange={this.onNameChange} placeholder="username"/>
                <input type="password" value={password} onChange={this.onPwChange} placeholder="password"/>
                <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit </button>
            </form>
        )
    }
}
