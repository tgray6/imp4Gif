import React from 'react';
import { connect } from 'react-redux';
import './navbar.css';
import {Link} from 'react-router-dom';
import logo2 from '../landingpage/logo2.png';
import {togglePostForm} from '../actions/protected';
import {toggleFormsOff} from '../actions/actions';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';


export class NavBar extends React.Component {

  //toggles post form
  toggleForm() {
    this.props.dispatch(togglePostForm());
  };

  //clears authtoken from current user and from local storage and login/register forms back to false
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
    this.props.dispatch(toggleFormsOff());
  }


  render(){
    return (
      <div>
        <nav>
          <ul id="containerNav">
            <li id="navList">
              <Link to="/"><img src={logo2} id="navlogo" alt="logo"></img></Link>
            </li>
            <div className="rightNav">
              <li id="navList"> 
                <button className="post" onClick={() => this.toggleForm()}>Post</button> 
              </li>
              <li id="navList">
                <button className="logoutUser" onClick={() => this.logOut()}>Logout</button>
              </li>
              <p className="helloUser">{this.props.nickname}</p>
            </div>
          </ul>
        </nav>
      </div>
    );
  };
}


const mapStateToProps = state => ({
  nickname: state.auth.currentUser.nickname
})


export default connect(mapStateToProps)(NavBar);