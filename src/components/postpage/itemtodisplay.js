import React from 'react';
import { connect } from 'react-redux';
import {loading} from '../actions/actions';
import './postpage.css';
import CommentForm from './commentform';
import { withRouter } from "react-router-dom";
import Spinner from 'react-spinkit';
import {API_BASE_URL} from '../config';
import LoadingComponent from '../loading/loadingcomponent';
import {fetchProtectedData} from '../actions/protected';
import PostForm from '../postmodalform/postform';


export class ItemToDisplay extends React.Component {

  deleteData() {

    //toggle loading to true for loading icon
    this.props.dispatch(loading());


    //FETCH TO DELETE ENDPOINT using the currently viewed post id adding to the end of the fetch url.
    let id = this.props.itemToDisplay.id

    fetch(`${API_BASE_URL}/items/` + id, {
      method: 'DELETE',
      headers:{
        Authorization: `Bearer ${this.props.authToken}`
     }
    })
    .then(res => res.json())
    .then(response => {
      return response;
    })
    .catch(error => console.error('Error:', error))
  

    //Redirects back to homepage and toggles loading to off in timeout
    let backtoPostedSection = () => {
      this.props.history.push('/');
      this.props.dispatch(loading());
    }
    setTimeout(backtoPostedSection, 1000);
  }
       


  renderResults(){
    //this is looking to determine the "TYPE" of the post clicked on so that it renders accordingly, same as postedsection.js(page with all posts);
    //remember, on postform.js, we determine the type of each post by the url check.
    if (this.props.itemToDisplay.type==="video"){
      return (
        <div className="postParent">
          <header>
            <h1 className="postTitle">{this.props.itemToDisplay.title}</h1>
            <p className="author">Post By: {this.props.itemToDisplay.author}</p>
          </header>
          <div>
            <video height="auto" width="100%" controls="true" preload='metadata' className="flexImage" muted="true" autoPlay="true" loop="true">
            <source src={this.props.itemToDisplay.url} type="video/mp4" alt="postedvideo"/>
            </video>
          </div>
          <div>
            <a href ={this.props.itemToDisplay.url}  target="_blank" className="source">Source</a>
          </div>
        </div>
      )
    }

    else if (this.props.itemToDisplay.type==="youtube"){
      return(
        <div className="postParent">
          <header>
            <h1 className="postTitle">{this.props.itemToDisplay.title}</h1>
            <p className="author">Post By: {this.props.itemToDisplay.author}</p>
          </header>
          <div className="youtubeDiv">
            <iframe className="flexImage" title="youtube video" src={this.props.itemToDisplay.youTubeUrl} allowFullScreen autohide="1">
            </iframe>
          </div>
          <div>
            <a href ={this.props.itemToDisplay.url}  target="_blank"className="source">Source</a>
          </div>
        </div>
      )
    }

    else{
      return (
        <div className="postParent">
          <header className="fuck">
            <h1 className="postTitle">{this.props.itemToDisplay.title}</h1>
            <p className="author">Post By: {this.props.itemToDisplay.author}</p>
          </header>
          <div>
            <img src={this.props.itemToDisplay.url} className="flexImage"  alt="postedimage">
            </img>
          </div>
          <div>
            <a href ={this.props.itemToDisplay.url}  target="_blank" className="source">Source</a>
          </div>
        </div>
      ) 
    }
    }

  render(){

    //renders postform if clicked on Post button
    if (this.props.show===true) {
      return(
          <PostForm />
      )
    }

    //this used our loadingcomponent to fix refresh page issue on this page. in-depth notes on loadingcomponent.js
    if (!this.props.ready){
      this.props.dispatch(fetchProtectedData());
    }

    const comments = !this.props.ready? null: this.props.itemToDisplay.comments.map((item, index) => (
        <li key={index}>{item}</li>
    ));

    //this if statement is for style points for deleting and routing back to root / postedsection on Delete. Simply shows a better transition to the main page.
    if (this.props.loading===true) {
      return(
        <section className="postedSection">
          <div className="flexContainer2">
            <Spinner name="wandering-cubes" color="rgb(86, 7, 189)" fadeIn='none' />
          </div>
        </section>
      )
    }

    
    return (
      <div>
        <LoadingComponent>

          <section className="postedSection">
            <div className="flexContainer1">
              {this.props.ready? this.renderResults() : null}
            </div>

            {
              this.props.ready && this.props.userId === this.props.itemToDisplay.authorid?
              <div>
                <button className="deleteButton" onClick={(e)=>{ if(window.confirm("Sure you want to delete your post?"))this.deleteData(e)}}>Delete</button>
              </div>
              : null
            }
          </section>

          <section className="commentSection">
            <CommentForm />
              <hr></hr>
              <div className="commentDiv">
                <ul className="comments">{comments}</ul>
              </div>
          </section>

        </LoadingComponent>
      </div>
    );
  }
}


const mapStateToProps = (state, props )=> { 
  let result = 
  {
  loading: state.imp.loading,
  ready: !state.protectedData.ready,
  itemToDisplay: state.protectedData.data.find((post) => post.id === props.match.params.postId),
  authToken: state.auth.authToken,
  userId: state.auth.currentUser.userID,
  show: state.protectedData.show
  }
  return result
};


export default connect(mapStateToProps)(withRouter(ItemToDisplay));