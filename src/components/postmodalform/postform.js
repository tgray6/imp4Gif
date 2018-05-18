import React from 'react';
import './postform.css';

export default function PostForm (props) {
    return (
      <div>
      <header>
        <h1>Make a Post</h1>
      </header>
      <section>
        <form id="postForm">
          <div className="form-section">
            <label htmlFor="post-title">Post Title</label>
            <input type="text" name="post-title" placeholder="This is the title of your post and appears above your actual post." required />
          </div>

          <div className="form-section">
            <label htmlFor="post-link">Paste in your link</label>
            <input type="text" name="post-link" placeholder="Put In That Link. (Right click an image/gif/mp4 and copy image address)" required />
          </div>
          <button type="submit">Submit</button>
          <button className="close" onClick={props.closeForm}>Close</button>
        </form>
      </section>
      </div>
    );
}
