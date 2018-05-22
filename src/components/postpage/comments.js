import React from 'react';
import { connect } from 'react-redux';

export function Comments (props) {
    return (
       <div className="commentSection">
          <p className="comments">{props.nickName + props.comments}</p>
        </div>
    );
}

const mapStateToProps = state => ({
	nickName: state.nickName + ": ",
	comments: state.items.comments
});

export default connect(mapStateToProps)(Comments);

// Comments.defaultProps = {
// 	nickName: "Xer0 : ",
// 	comment: "Test Post"
// }