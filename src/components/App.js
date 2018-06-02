import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import {connect} from 'react-redux';
import LandingPage from './landingpage/landingpage';


import NavBar from './homepage/navbar';
import ItemToDisplay from './postpage/itemtodisplay'
import PostedSection from './homepage/postedsection';

export class App extends Component {
  render() {

    if(this.props.nickName){
      return(
      <Router>
        <div className="App">
          <NavBar />

          <Route exact path="/:postId" component={ItemToDisplay} />

          <Route exact path="/" component={PostedSection} />

        </div>
      </Router>
      )
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
