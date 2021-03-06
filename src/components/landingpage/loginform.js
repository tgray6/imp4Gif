import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty} from '../validation';
import {login} from '../actions/auth';
import LoginInput from './logininput';

export class LoginForm extends React.Component {

  //on submission of login form, dispatched login action. Form utilizes redux-form for the success and error messages displayed to user. handleSubmit is a prop passed to us by redux-form, so we call handleSubmit in onSubmit.
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render(){

    // let successMessage;
    // if (this.props.submitSucceeded) {
    //   successMessage = (
    //     <div className="message message-success">
    //     Login Successful. Loading...
    //     </div>
    //   );
    // }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message message-error">{this.props.error}</div>
      );
    }


    return (
      <div>
        <h2>Login</h2>
        <form className='login-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        
        {errorMessage}
        <div>
  	        <label htmlFor="user-name">Username </label>
              <Field 
              component={LoginInput} 
              type="text" 
              name='username' 
              id='loginUsername' 
              placeholder='Username'
              validate={[required, nonEmpty]}
            />
        </div>
        <div>
          <label htmlFor="password">Password </label>
            <Field 
              component={LoginInput} 
              type="password" 
              name='password' 
              id='loginPassword' 
              placeholder='Password'
              validate={[required, nonEmpty]}
            />
        </div>
        <button type='submit'>Submit Login</button>
        </form>
      </div>
    );
  }
}


export default reduxForm({ 
  form: "login",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('login', Object.keys(errors)[0])) })(LoginForm);

    //{successMessage}  removed from line 37