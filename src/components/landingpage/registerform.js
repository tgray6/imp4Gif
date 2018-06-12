import React from 'react';
// import {loginUser} from '../actions/actions';
// import { connect } from 'react-redux';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {required, nonEmpty} from '../validation';
import RegisterInput from './registerinput';

export class RegisterForm extends React.Component {


  onSubmit(values) {

    const APIURL = "http://localhost:8888/users";

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
              _error: 'Error submitting message'
            })
          );
      });


  }
  render(){


        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Registration Successful
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
            <label htmlFor="nick-name">Nickname </label>
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
        	<label htmlFor="user-name">Username </label>
            <Field 
              component={RegisterInput} 
              type="text" 
              name='username' 
              id='registerUsername' 
              placeholder='Username'
              validate={[required, nonEmpty]}
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
              validate={[required, nonEmpty]} 
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

// export default connect()(RegisterForm);

export default reduxForm({ 
  form: "register",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('register', Object.keys(errors)[0])) })(RegisterForm);
