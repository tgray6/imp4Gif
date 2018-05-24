import React from 'react';

import CommentForm from './commentform';
import Comments from './comments';

export default function CommentSection (props) {
    return (
      <section className = "commentSec">
        <CommentForm />
        <hr></hr>
        <Comments />
      </section>
    );
}