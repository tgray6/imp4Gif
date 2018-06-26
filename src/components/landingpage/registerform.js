import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty, isTrimmed, matches} from '../validation';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import RegisterInput from './registerinput';
const matchesPassword = matches('password');


export class RegisterForm extends React.Component {

  onSubmit(values) {
    const {username, password, nickname} = values;
    const user = {username, password, nickname};
    return this.props.dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }


  render(){

    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="message message-success">
          Registration Success. Loading...
        </div>
            );
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message message-error">{this.props.error}</div>
      );
    }

    return (
      <div>
        <h2>Register</h2>
        <form className='signup-form' onSubmit={this.props.handleSubmit(values => 
        this.onSubmit(values)
        )}>

          {successMessage}
          {errorMessage}

     	    <div>
            <label htmlFor="nickname">Nickname </label>
            <Field 
              component={RegisterInput} 
              type="text" 
              name='nickname' 
              id='registerNickname' 
              placeholder='Nickname' 
              validate={[required, nonEmpty]}
            />
          </div>

          <div>
        	  <label htmlFor="username">Username </label>
            <Field 
              component={RegisterInput} 
              type="text" 
              name='username' 
              id='registerUsername' 
              placeholder='Username'
              validate={[required, nonEmpty, isTrimmed]}
            />
          </div>

          <div>
           	<label htmlFor="password">Password </label>
            <Field 
              component={RegisterInput} 
              type="password" 
              name='password' 
              id='registerPassword' 
              placeholder='Password'
              validate={[required, nonEmpty, isTrimmed]} 
            />
          </div>

          <div>
            <label htmlFor="passwordConfirm">Confirm password</label>
            <Field
              component={RegisterInput}
                type="password"
                name="passwordConfirm"
                id='validateregisterPassword' 
                placeholder='Confirm Password'
                validate={[required, nonEmpty, matchesPassword]}
            />
          </div>

          <button type='submit' disabled={
          this.props.pristine ||
          this.props.submitting }>Submit Register 
          </button>

        </form>
      </div>
    );
  }
}


export default reduxForm({ 
  form: "register",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('register', Object.keys(errors)[0])) })(RegisterForm);