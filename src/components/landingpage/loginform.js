import React from 'react';

export default function LoginForm(props) {
  return (
    <form className='login-form'>
        <div>
  	        <label htmlFor="user-name">Username </label>
            <input type="text" name='Enter Username' id='loginUsername' placeholder='Username' />
        </div>
        <div>
            <label htmlFor="password">Password </label>
            <input type="password" name='password' id='loginPassword' placeholder='Password' />
        </div>
        <button type='submit'>Login</button>
        </form>
  );
}