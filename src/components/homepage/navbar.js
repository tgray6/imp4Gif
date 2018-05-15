import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../landingpage/logo.png';

export function NavBar(props) {
  return (
  <nav>
    <ul className="container">
      <Link to="/homepage"><img src={logo} id="navlogo" alt="logo"></img></Link>
      <li className="logo"> 
        <button className="post">Post</button> 
      </li>
      <li className="logoutSection">
        <p className="helloUser">Hello {props.nickName} </p> 
        <button className="logoutUser">Logout</button>
      </li>
    </ul>
  </nav>
  );
}

const mapStateToProps = state => ({
  nickName: state.nickName
});

export default connect(mapStateToProps)(NavBar);

// NavBar.defaultProps = {
// 	nickName: "Xer0"
// }