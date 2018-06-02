import React from 'react';

import './landingpage.css';

import Header from './header';
import RegisterForm from './registerform';
import LoginForm from './loginform';
import Explanation from './explanation';



 export default class LandingPage extends React.Component {


  render(){

    return (
      <div className="App">
        <Header />
        <section>
          <RegisterForm />
          <LoginForm />
        </section>
          <Explanation />
      </div>
    );
  }
}


// export default withRouter(LandingPage);