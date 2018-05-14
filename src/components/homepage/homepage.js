import React from 'react';

import './homepage.css';

import NavBar from './navbar';
import PostedSection from './postedsection';

export default function HomePage (props) {
    return (
      <div className="App">
      	<NavBar />
      	<header><h1>Recent Posts</h1></header>
      	<PostedSection />
      </div>
    );
}