import React, { Component } from 'react';
import $  from 'jquery';

const checkNamePassword = (name, password) => {
    // check name and password
    // get our form data out of state
    const data = {
        name: name,
        about: about,
    };
    $.post({
        data: data,
        url: `/api/login/`,
        dataType: "json"
    }).then(res => {
        console.log(res);
    })
}

export default class UserLogin extends Component {
    
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
            <form className="signInForm" onSubmit={this.handleSubmit}>
                <input type="text" value={this.name} onChange={this.onNameChange} placeholder="username"/>
                <input type="password" value={this.password} onChange={this.onPwChange} placeholder="password"/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
