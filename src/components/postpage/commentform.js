import React from 'react';
import { connect } from 'react-redux';
import {addComment} from '../actions/actions';

export class CommentForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();

    const comment = this.props.nickName + ": " + this.commentInput.value;

    this.props.dispatch(addComment(comment));
    this.commentInput.value = '';
  };


  render(){

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
  nickName: state.nickName,
  itemToDisplay: state.itemToDisplay
});


export default connect(mapStateToProps)(CommentForm);
