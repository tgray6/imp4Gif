import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';


import {connect} from 'react-redux';
import LandingPage from './landingpage/landingpage';
import HomePage from './homepage/homepage';
import PostPage from './postpage/postpage';



export class App extends Component {
  render() {

    if(this.props.nickName){
      if(this.props.itemToDisplay){
        return (
          <PostPage />
          )
      }
      else {
        return (
          <HomePage />
          )
      }
    } 
    else {
      return (
        <LandingPage />
      )
    }
  }
}

const mapStateToProps =  state => ({
  nickName: state.nickName,
  itemToDisplay: state.itemToDisplay,
})

export default connect(mapStateToProps)(App)



// export default class App extends Component {
//   render() {
//     return (
//         <div>
//           <Route exact path="/" component={LandingPage} />
//           <Route exact path="/homepage" component={HomePage} />
//           <Route path="/postpage/:id" exact strict component={PostPage} />
//         </div>
//     );
//   }
// }
