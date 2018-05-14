import React from 'react';

export default function RegisterForm(props) {
  return (
    <form className='signup-form'>
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
  );
}