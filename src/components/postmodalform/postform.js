import React from 'react';
import {connect} from 'react-redux';
import './postform.css';
import {togglePostForm} from '../actions/protected';
import {addPost} from '../actions/protected';
import {reduxForm, Field} from 'redux-form';
import {API_BASE_URL} from '../config';
import {toggleModal} from '../actions/protected';
import {toggleModalOff} from '../actions/protected';
import Explanation from './explanationtwo';


//TODO: Utlize redux-form using input.js for link validation on post.
export class PostForm extends React.Component{

  //toggles the Link Instruction visibility
  toggleModal = () => {
    this.props.dispatch(toggleModal());
  };

  //toggles the post form visibility, as well as link guide is set to false when closing the form.
  toggleForm = () => {
    this.props.dispatch(togglePostForm());
    this.props.dispatch(toggleModalOff());
  };

  //this submit function is called on form submit, and it is taking the url that the user is pasting in, making changes to help ensure the link is in correct format, and checking it to determine the TYPE, which tells each post how to render on postedsection and itemtodisplay. Then POSTS the data payload in const Data, then dispatches addPost to render on the client-side and sort the posts, showing the newest first.
  submit = () => {
    const title = this.getTitle.value;
    let url
    url = this.getUrl.value.replace(".gifv", ".gif")

    let youtubeTest = url.replace("watch?v=" , "embed/");
    let youTubeTest2 = youtubeTest.replace("https://m.", "https://www.");
    let youTubeUrl = youTubeTest2.split('&')[0];

    const subString = ".mp4";
    const youTubeString = "youtube.com";

    function contains(search, find) {
    return search.indexOf(find) !== -1;
    }


    let type

    if (contains(url.toLowerCase(), subString.toLowerCase())){
      type="video";
    }

    else if (contains(url.toLowerCase(), youTubeString.toLowerCase())){
      type="youtube";
    }
    else{
      type="image";
    }

    const DATA = {
      title,
      type: type,
      url,
      youTubeUrl,
      author: this.props.nickname,
      comments: []
    };

    let form = document.getElementById("postForm");
    form.reset();

    fetch(`${API_BASE_URL}/items`, {
      method: 'POST',
      body: JSON.stringify(DATA), 
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.props.authToken}`
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      return response;
    })
    .then(response => this.props.dispatch(addPost(response)));
  };


  render(){

    return (
      <div className="postformDiv">
        <header className="postformHead">
          <h1>Make a Post</h1>
        </header>
        <section className="postFormSection">

          <form id="postForm" onSubmit={this.props.handleSubmit(this.submit)}>

            <div className="form-section">
              <label htmlFor="post-title">Post Title</label>
              <Field type="text" name="post-title" component="input" placeholder="This is the title of your post" minLength="1" maxLength="50" required ref={(input) => this.getTitle = input} />
            </div>

            <div className="form-section">
              <label htmlFor="post-link">Paste in your link</label>
              <Field type="text" name="post-link" component="input" placeholder="Put In That Link. (Instructions Below)" required ref={(input) => this.getUrl = input}/>
            </div>

            <button type="submit">Submit</button>
            <button className="close" onClick={this.toggleForm}>Close</button>
          </form>

          <div className="linkGuide">
            <button onClick={this.toggleModal}>Link Guide</button>
          </div>
        </section>

          {
            this.props.modalShow?
            <Explanation />
            : null
          }

      </div>
    );
  }
}


const mapStateToProps =  state => ({
  nickname: state.auth.currentUser.nickname,
  authToken: state.auth.authToken,
  modalShow: state.protectedData.modalShow
})


export default connect(mapStateToProps)(reduxForm({ form: "post" })(PostForm));