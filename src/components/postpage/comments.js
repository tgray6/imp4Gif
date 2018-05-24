import React from 'react';
import { connect } from 'react-redux';


//remember, if its just an export function, you dont need to use this.props, just use props. this.props doesn't work.
export function Comments (props) {
	const comments = props.comments.map((item, index) => (
			<li key={index}>{item}</li>
		));

	return (
       <div className="commentSection">
          <ul className="comments">{comments}</ul>
       </div>
	)
}

const mapStateToProps = state => ({
	comments: state.itemToDisplay.comments
});

export default connect(mapStateToProps)(Comments);