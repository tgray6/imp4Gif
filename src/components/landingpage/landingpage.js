import React from 'react';

import './landingpage.css';

import Header from './header';
import RegisterForm from './registerform';
import LoginForm from './loginform';
import Explanation from './explanation';
import { withRouter } from 'react-router-dom'
// this also works with react-router-native



 class LandingPage extends React.Component {

  nextPath(path) {
  this.props.history.push(path);
  }

  render(){

    return (
      <div className="App">
        <Header />
        <section>
          <RegisterForm goHome={() => this.nextPath('/homepage')} />
          <LoginForm goHome={() => this.nextPath('/homepage')} />
        </section>
          <Explanation />
      </div>
    );
  }
}

export default withRouter(LandingPage);