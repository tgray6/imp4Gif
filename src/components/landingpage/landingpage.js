import React from 'react';

import './landingpage.css';

import Header from './header';
import RegisterForm from './registerform';
import LoginForm from './loginform';
import Explanation from './explanation';
import { connect } from 'react-redux';
import {toggleRegisterForm} from '../actions/actions';
import {toggleLoginForm} from '../actions/actions';

 export class LandingPage extends React.Component {

  toggleRegisterForm = () => {
    this.props.dispatch(toggleRegisterForm());
    console.log(this.props.showRegisterForm)
  };

  toggleLoginForm = () => {
    this.props.dispatch(toggleLoginForm());
  };

  render(){

    return (
      <div className="App">
        <Header />
        <section className="loginSection">
        <div className="registerFormDiv">
        {
        this.props.showRegisterForm? <RegisterForm />
        : <button onClick={this.toggleRegisterForm}>Register</button>
        }
        </div>
        <div className="loginFormDiv">
        {
        this.props.showLoginForm? <LoginForm />
        : <button onClick={this.toggleLoginForm}>Login</button>
        }
        </div>
        </section>
          <Explanation />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showRegisterForm: state.imp.showRegisterForm,
  showLoginForm: state.imp.showLoginForm
});

export default connect(mapStateToProps)(LandingPage);

// export default withRouter(LandingPage);