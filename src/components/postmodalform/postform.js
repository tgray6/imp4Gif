import React from 'react';
import {connect} from 'react-redux';
import './postform.css';
import {togglePostForm} from '../actions/actions';
import {addPost} from '../actions/actions';
import {reduxForm, Field} from 'redux-form';
// import Input from './input';
// const uuidv1 = require('uuid/v1');

export class PostForm extends React.Component{

  toggleForm = () => {
    this.props.dispatch(togglePostForm());
    console.log(this.props.show);
  };



  submit = () => {

    // event.preventDefault();
    const title = this.getTitle.value;
    let url = this.getUrl.value;

    let youtubeTest = url.replace("watch?v=" , "embed/");
    let youTubeUrl = youtubeTest.replace("https://m.", "https://www.");

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
      // id: uuidv1(),
      title,
      type: type,
      url,
      youTubeUrl,
      author: this.props.nickName,
      comments: []
    };

    



    let form = document.getElementById("postForm");
    form.reset();





    // const APIURL = "http://localhost:8888/items/";
    const APIURL = "https://thawing-mountain-68022.herokuapp.com/items/";


    fetch(APIURL, {
      method: 'POST',
      body: JSON.stringify(DATA), 
      headers:{
        'Content-Type': 'application/json'
     }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response);
      return response;
    })
    .then(response => this.props.dispatch(addPost(response)));

  };


  render(){
    return (
      <div>
      <header>
        <h1>Make a Post</h1>
      </header>
      <section>
        <form id="postForm" onSubmit={this.props.handleSubmit(this.submit)}>
          <div className="form-section">
            <label htmlFor="post-title">Post Title</label>
            <Field type="text" name="post-title" component="input" placeholder="This is the title of your post" required ref={(input) => this.getTitle = input} />
          </div>

          <div className="form-section">
            <label htmlFor="post-link">Paste in your link</label>
            <Field type="text" name="post-link" component="input" placeholder="Put In That Link. (Instructions on Login Page)" required ref={(input) => this.getUrl = input}/>
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
  nickName: state.imp.nickName
})

export default connect(mapStateToProps)(reduxForm({ form: "post" })(PostForm));