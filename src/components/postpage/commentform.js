import React from 'react';
import { connect } from 'react-redux';
import {addComment} from '../actions/actions';
import { withRouter } from 'react-router-dom'
export class CommentForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Log this id = : " + this.props.id);
    const comment = this.props.nickName + ": " + this.commentInput.value;

    this.props.dispatch(addComment(comment, this.props.match.params.postId));
    this.commentInput.value = '';
  };


  render(){
    // console.log("Testing comment form:" + this.props.itemToDisplay);
    return (
    	<div>
        	<form onSubmit={this.handleSubmit}>
          		<div>
            		<textarea id="commentForm" name="commentForm" placeholder="Comment on This" rows="15" required ref={(input) => this.commentInput = input}></textarea>
         	 	</div>
          		<button type='submit'>Comment</button>
        	</form>
        </div>
    );
  }
}


const mapStateToProps = state => ({
  nickName: state.nickName
  // id: props.id
  // itemToDisplay: state.itemToDisplay
});


export default connect(mapStateToProps)(withRouter(CommentForm));
