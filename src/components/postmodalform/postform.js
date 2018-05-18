import React from 'react';
import {connect} from 'react-redux';
import './postform.css';
import {togglePostForm} from '../actions/actions';

export class PostForm extends React.Component{

  toggleForm = () => {
    this.props.dispatch(togglePostForm());
    console.log(this.props.show);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const title = this.getTitle.value;
    const url = this.getUrl.value;
    const data = {
      id: new Date(),
      title,
      url
    }
    console.log(data);
    let resetForm = () => {
      this.getTitle.reset();
      this.getUrl.reset();
    }
    resetForm
    this.props.dispatch(togglePostForm());
  }

  render(){
    return (
      <div>
      <header>
        <h1>Make a Post</h1>
      </header>
      <section>
        <form id="postForm" onSubmit={this.handleSubmit}>
          <div className="form-section">
            <label htmlFor="post-title">Post Title</label>
            <input type="text" name="post-title" placeholder="This is the title of your post and appears above your actual post." required ref={(input) => this.getTitle = input} />
          </div>

          <div className="form-section">
            <label htmlFor="post-link">Paste in your link</label>
            <input type="text" name="post-link" placeholder="Put In That Link. (Right click an image/gif/mp4 and copy image address)" required ref={(input) => this.getUrl = input}/>
          </div>
          <button type="submit">Submit</button>
          <button className="close" onClick={this.toggleForm}>Close</button>
        </form>
      </section>
      </div>
    );
  }
}

const mapStateToProps =  state => ({
  items: state.items
})

export default connect(mapStateToProps)(PostForm)