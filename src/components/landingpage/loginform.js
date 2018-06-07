import React from 'react';
import {loginUser} from '../actions/actions';
import { connect } from 'react-redux';
// import {reduxForm, Field} from 'redux-form';
export class LoginForm extends React.Component {

handleSubmit = (event) => {
  event.preventDefault();
  this.props.dispatch(loginUser());
}
  render(){
  return (
    <div>
    <h2>Login</h2>
    <form className='login-form' onSubmit={this.handleSubmit}>
        <div>
  	        <label htmlFor="user-name">Username </label>
            <input type="text" name='Enter Username' id='loginUsername' placeholder='Username' />
        </div>
        <div>
            <label htmlFor="password">Password </label>
            <input type="password" name='password' id='loginPassword' placeholder='Password' />
        </div>
        <button type='submit'>Submit Login</button>
        </form>
    </div>
  );
  }
}


export default connect()(LoginForm);

