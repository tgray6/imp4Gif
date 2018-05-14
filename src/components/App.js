import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import LandingPage from './landingpage/landingpage';
import HomePage from './homepage/homepage';
import PostPage from './postpage/postpage';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/postpage" component={PostPage} />
        </div>
      </Router>
    );
  }
}
