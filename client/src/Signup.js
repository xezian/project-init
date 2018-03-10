import React from 'react';
import classNames from 'classnames';
import validator from 'validator';
import $ from "jquery";


export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { value: '', isValid: true, message: '' },
      email: { value: '', isValid: true, message: '' },
      password: { value: '', isValid: true, message: '' },
      confirm: { value: '', isValid: true, message: '' }
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
    this.resetValidationStates = this.resetValidationStates.bind(this);
  }

  onChange = (event) => {
    let state = this.state;
    state[event.target.name].value = event.target.value;

    this.setState(state);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.resetValidationStates(); //reset states before the validation procedure is run.
    
    if (this.formIsValid()) { 
      // Credentials must be saved to database...
      const data = {
        username: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      // console.log(data);

      $.post({
        url: '/api/users',
        data: data,
        dataType: 'json'
      }).then((result) => {
        // console.log(result);
        this.props.handleClose();
      });
    }
  }

  formIsValid() {
    let state = this.state;

    // Validate name that it does not exist -- Not functional right now!
    
    // if (!validator.contains(state.name.value, seed)) {
    //   state.name.isValid = false;
    //   state.name.message = 'This name is already taken';

    //   this.setState(state);
    //   return false;
    // }
    

    // Validate email is valid
    if (!validator.isEmail(state.email.value)) {
      state.email.isValid = false;
      state.email.message = 'Please enter a valid email address';

      this.setState(state);
      return false;
    }

    // Validate password confirmed 
    if (!validator.equals(state.password.value, state.confirm.value)) {
      state.confirm.isValid = false;
      state.confirm.message = 'Password does not match';

      this.setState(state);
      return false;
    }

    return true;
  }

  resetValidationStates() {
    let state = this.state;

    Object.keys(state).map(key => {
      if (state[key].hasOwnProperty('isValid')) {
        state[key].isValid = true;
        state[key].message = '';
      }
    });

    this.setState(state);
  }

  render() {
    let { name, email, password, confirm } = this.state;
    
    let nameClass = classNames('form-group', {'has-error': !name.isValid});
    let emailClass = classNames('form-group', {'has-error': !email.isValid});
    let passwordClass = classNames('form-group', {'has-error': !password.isValid});
    let confirmClass = classNames('form-group', {'has-error': !confirm.isValid});

    return (
      <div>
        <form className="form-signin" onSubmit={this.onSubmit}>
          <div className={nameClass}>
            <input type="text" name="name" className="form-control"
              placeholder="Choose a username" value={name.value} onChange={this.onChange} autoFocus />
            <span className="help-block">{name.message}</span>
          </div>

          <div className={emailClass}>
            <input type="text" name="email" className="form-control"
              placeholder="Enter email address" value={email.value} onChange={this.onChange} />
            <span className="help-block">{email.message}</span>
          </div>

          <div className={passwordClass}>
            <input type="password" name="password" className="form-control"
              placeholder="Password" value={password.value} onChange={this.onChange} />
            <span className="help-block">{password.message}</span>
          </div>

          <div className={confirmClass}>
            <input type="password" name="confirm" className="form-control"
              placeholder="Confirm Password" value={confirm.value} onChange={this.onChange} />
            <span className="help-block">{confirm.message}</span>
          </div>

          <button className="btn btn-block btn-danger" type="submit" onClick={this.onSubmit}>Create Account</button>
        </form>
      </div>
    );
  }
};

