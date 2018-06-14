import React from 'react';
// import {loginUser} from '../actions/actions';
// import { connect } from 'react-redux';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {required, nonEmpty} from '../validation';
import LoginInput from './logininput';


export class LoginForm extends React.Component {

  onSubmit(values) {
    

    const APIURL = "http://localhost:8888/auth/login";

    return fetch(APIURL, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          if (
            res.headers.has('content-type') &&
            res.headers
              .get('content-type')
              .startsWith('application/json')
          ) {
            // It's a nice JSON error returned by us, so decode it
              return res.json().then(err => Promise.reject(err));
            }
              // It's a less informative error returned by express
            return Promise.reject({
              code: res.status,
              message: res.statusText
            });
        }
              return;
            })

      .then(() => console.log('Submitted with values', values))
      .catch(err => {
        const {reason, message, location} = err;
          if (reason === 'ValidationError') {
            // Convert ValidationErrors into SubmissionErrors for Redux Form
            return Promise.reject(
              new SubmissionError({
                  [location]: message
                        })
            );
          }
          return Promise.reject(
            new SubmissionError({
              _error: 'Error Submitting Post'
            })
          );
      });

  }
  render(){

  let successMessage;
  if (this.props.submitSucceeded) {
    successMessage = (
      <div className="message message-success">
        Login Successful
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
    <h2>Login</h2>
    <form className='login-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {successMessage}
        {errorMessage}
        <div>
  	        <label htmlFor="user-name">Username </label>
              <Field 
              component={LoginInput} 
              type="text" 
              name='loginusername' 
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
              name='loginpassword' 
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


// export default connect()(LoginForm);

export default reduxForm({ 
  form: "login",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('login', Object.keys(errors)[0])) })(LoginForm);
