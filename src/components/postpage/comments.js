import React from 'react';


export default function Comments (props) {
    return (
       <div className="commentSection">
          <p className="comments">{props.nickName + props.comment}</p>
        </div>
    );
}

Comments.defaultProps = {
	nickName: "Xer0 : ",
	comment: "Test Post"
}