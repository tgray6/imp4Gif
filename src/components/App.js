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

  //all of these mounts and periodic refreshes are for logging in and authtoken refreshes.
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } 
    else if (prevProps.loggedIn && !this.props.loggedIn) {
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

    //this main loggedIn prop is how we determine what to render. This prop changes as soon as a user logs in and currentUser is set to exist on the authSuccess action found on auth.js.
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
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(App)