import React, { Component } from 'react';
import {
    BrowserRouter as
    Router,
    Route
} from 'react-router-dom';

import {connect} from 'react-redux';
import LandingPage from './landingpage/landingpage';

import NavBar from './homepage/navbar';
import ItemToDisplay from './postpage/itemtodisplay'
import PostedSection from './homepage/postedsection';
import {refreshAuthToken} from './actions/auth';

export class App extends Component {

    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

  render() {
    // console.log("props.loggedIn = " + this.props.loggedIn)

    if(this.props.loggedIn){
      return(
        <Router>
        <div className="App">
          <NavBar />
          
          <Route exact path="/" component={PostedSection} />

          <Route exact path="/:postId" component={ItemToDisplay} />

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

const mapStateToProps = state => ({
    // hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
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
