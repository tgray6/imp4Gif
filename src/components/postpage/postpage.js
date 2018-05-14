import React from 'react';

import './postpage.css';

import NavBar from '../homepage/navbar';
import PostedSection from './postedsection';
import CommentSection from './commentsection';

export default function PostPage (props) {
    return (
      <div className="App">
      	<NavBar />
      	<header><h1>{props.title}</h1></header>
      	<PostedSection />
      	<CommentSection />

      </div>
    );
}

PostPage.defaultProps = {
	title: "Test Title"
}