import React from 'react';
import { connect } from 'react-redux';
import {updateItem} from '../actions/protected';
import { withRouter } from 'react-router-dom';
import {API_BASE_URL} from '../config';


//comment form, found at bottom of itemtodisplay(after clicking a thumbnail page). 
export class CommentForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const comment = {
      comment: this.props.nickname + ": " + this.commentInput.value
    }

    //postId is our router params we use, so in order to PUT to the correct post, we use the let id to hold the value of the param post id, then add it to the end of the fetch url. Then, on success, we dispatch updateItem to update the currently viewed post.
    let id = this.props.match.params.postId

    fetch(`${API_BASE_URL}/items/` + id, {
      method: 'PUT',
      body: JSON.stringify(comment), 
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
    .then(response => this.props.dispatch(updateItem(response)));

    this.commentInput.value = '';
  };

  render(){

    return (
    	<div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <textarea id="commentForm" name="commentForm" placeholder="Comment on This. Max Length 100 Characters" rows="15" minLength="1" maxLength="100" required ref={(input) => this.commentInput = input}>
            </textarea>
         	</div>
          <button type='submit'>Comment</button>
        </form>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  nickname: state.auth.currentUser.nickname,
  authToken: state.auth.authToken
});


export default connect(mapStateToProps)(withRouter(CommentForm));