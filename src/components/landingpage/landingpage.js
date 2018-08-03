import React from 'react';
import './landingpage.css';
import Header from './header';
import RegisterForm from './registerform';
import LoginForm from './loginform';
import Explanation from './explanation';
import { connect } from 'react-redux';
import {toggleRegisterForm} from '../actions/actions';
import {toggleLoginForm} from '../actions/actions';
import Spinner from 'react-spinkit';


 //this is the main login/register component.
 export class LandingPage extends React.Component {

  //toggles register form visibility or the register form button visibility
  toggleRegisterForm = () => {
    this.props.dispatch(toggleRegisterForm());
  };


  //toggles login form visibility or the login form button visibility
  toggleLoginForm = () => {
    this.props.dispatch(toggleLoginForm());
  };

  render(){

        if (this.props.loginLoading===true) {
      return(
        <section className="postedSection">
          <div className="flexContainer2">
            <Spinner name="wandering-cubes" color="rgb(86, 7, 189)" fadeIn='none'/>
          </div>
        </section>
      )
    }

    return (
      <div className="lander">
        <Header />
        <section className="loginSection">

          <div className="registerFormDiv">
            {
              this.props.showRegisterForm? <RegisterForm />
              : <button className="registerFormButton" onClick={this.toggleRegisterForm}>Register</button>
            }
          </div>

          <div className="loginFormDiv">
            {
              this.props.showLoginForm? <LoginForm />
              : <button className="loginFormButton" onClick={this.toggleLoginForm}>Login</button>
            }
          </div>
          <div className="anonymous">
            <p>Login as Mr. Anonymous :</p>
            <p>Username: testuser</p>
            <p>Password: testpassword</p>
            </div>
        </section>
        <Explanation />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  showRegisterForm: state.imp.showRegisterForm,
  showLoginForm: state.imp.showLoginForm,
  loginLoading: state.auth.loginLoading
});


export default connect(mapStateToProps)(LandingPage);