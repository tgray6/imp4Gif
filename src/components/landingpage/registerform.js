import React from 'react';
import { connect } from 'react-redux';
import {loginUser} from '../actions/actions';
// import {fetchItems} from '../actions/actions';

export class RegisterForm extends React.Component {

handleSubmit = (event) => {
  event.preventDefault();
  this.props.dispatch(loginUser());
  // this.props.dispatch(fetchItems());
}
  render(){

  return (
    <div>
    <h2>Register</h2>
    <form className='signup-form' onSubmit={this.handleSubmit}>
     	<div>
            <label htmlFor="nick-name">Nickname </label>
            <input placeholder='This shows on posts' type="text" name='nick-name' id='registerNickname' />
        </div>
        <div>
        	<label htmlFor="user-name">Username </label>
            <input type="text" name='Enter Username' id='registerUsername' placeholder='Username' />
        </div>
        <div>
           	<label htmlFor="password">Password </label>
            <input type="password" name='password' id='registerPassword' placeholder='Password' />
        </div>
            <button type='submit'>Register </button>
        </form>
    </div>
  );
  }
}

export default connect()(RegisterForm);

