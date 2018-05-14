import React from 'react';

import './landingpage.css';

import Header from './header';
import RegisterForm from './registerform';
import LoginForm from './loginform';
import Explanation from './explanation';

export default function LandingPage (props) {
    return (
      <div className="App">
        <Header />
        <section>
          <h2>Register</h2>
          <RegisterForm />
          <h2>Login</h2>
          <LoginForm />
        </section>
        <section>
          <Explanation />
        </section>
      </div>
    );
}