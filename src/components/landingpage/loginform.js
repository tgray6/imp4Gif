import React from 'react';
import {loginUser} from '../actions/actions';
// import { connect } from 'react-redux';
import {reduxForm, Field} from 'redux-form';

export class LoginForm extends React.Component {

  onSubmit = () => {
    this.props.dispatch(loginUser());
  }
  render(){
  return (
    <div>
    <h2>Login</h2>
    <form className='login-form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div>
  	        <label htmlFor="user-name">Username </label>
            <Field component="input" type="text" name='loginusername' id='loginUsername' placeholder='Username' />
        </div>
        <div>
            <label htmlFor="password">Password </label>
            <Field component="input" type="password" name='loginpassword' id='loginPassword' placeholder='Password' />
        </div>
        <button type='submit'>Submit Login</button>
        </form>
    </div>
  );
  }
}


// export default connect()(LoginForm);

export default reduxForm({ form: "login" })(LoginForm);
