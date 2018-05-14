import React from 'react';


export default function PostForm (props) {
    return (
      <div>
      <header>
        <h1>Make a Post</h1>
      </header>
      <section>
        <form id="postForm">
          <div className="form-section">
            <label for="post-title">Post Title</label>
            <input type="text" name="post-title" placeholder="This is the title of your post and appears above your actual post." required> </input>
          </div>

          <div className="form-section">
            <label for="post-link">Paste in your link</label>
            <input type="text" name="post-link" placeholder="Put In That Link. (Right click an image/gif/mp4 and copy image address)" required> </input>
          </div>
          <button type="submit">Submit</button>
          <button className="close">Close</button>
        </form>
      </section>
      </div>
    );
}
