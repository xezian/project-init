import React, { Component } from 'react';
import $  from 'jquery';

const checkNamePassword = (name, password) => {
    console.log("hi "+name+"\n"+"Let's get you logged in")
    // check name and password
    // get our form data out of state
    const data = {
        username: name,
        password: password,
    };
    $.post({
        data: data,
        url: '/api/login/',
        dataType: "json"
    }).then(res => {
        console.log(JSON.stringify(res));
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
            <div>
                <form className="form-signin" onSubmit={this.onSubmit} id="login">
                    <div>
                        <input type="text" name="name" className="form-control"
                        placeholder="Enter username" value={name} onChange={this.onNameChange} autoFocus />
                    </div>

                    <div>
                        <input type="password" name="email" className="form-control"
                        placeholder="Enter password" value={password} onChange={this.onPwChange} />
                    </div>

                    <button className="btn btn-block btn-danger" type="submit" value="Submit" onClick={this.handleSubmit}>
                        Login
                    </button>
                </form>
            </div>
        )
    }
}
