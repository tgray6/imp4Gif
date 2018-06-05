import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './homepage.css';

import logo2 from '../landingpage/logo2.png';
import PostForm from '../postmodalform/postform';

import {togglePostForm} from '../actions/actions';
import {logoutUser} from '../actions/actions';
import {goHome} from '../actions/actions';


class NavBar extends React.Component {


  toggleForm = () => {
    this.props.dispatch(togglePostForm());
    console.log(this.props.show);
  };

  logoutUser = () => {
    this.props.dispatch(logoutUser());
  };

  goHome = () => {
    this.props.dispatch(goHome())
  };


  render(){
   return (
    <div>
    <nav>
     <ul className="container">
        <Link to={`/`}><img src={logo2} onClick={this.goHome} id="navlogo" alt="logo"></img></Link>
        <li> 
        <button className="post" onClick={this.toggleForm}>Post</button> 
        </li>
        <li className="logoutSection">
          <p id="helloUser">{this.props.nickName} </p> 
          <button className="logoutUser" onClick={this.logoutUser}>Logout</button>
        </li>
     </ul>
    </nav>
      {
      this.props.show?
      <PostForm />
      : null
      }
    </div>
  );
  };
}

const mapStateToProps = state => ({
  show: state.imp.show,
  nickName: state.imp.nickName,
});


export default connect(mapStateToProps)(NavBar);

// export default withRouter(connect(mapStateToProps)(NavBar));


















// export function NavBar(props) {
//   return (
//   <nav>
//     <ul className="container">
//       <Link to="/homepage"><img src={logo} id="navlogo" alt="logo"></img></Link>
//       <li className="logo"> 
//         <button className="post">Post</button> 
//       </li>
//       <li className="logoutSection">
//         <p className="helloUser">Hello {props.nickName} </p> 
//         <button className="logoutUser">Logout</button>
//       </li>
//     </ul>
 
//   </nav>
//   );
// }

// //<PostForm /> line 21, need it to render modal on click of post button

// const mapStateToProps = state => ({
//   nickName: state.nickName
// });

// export default connect(mapStateToProps)(NavBar);
