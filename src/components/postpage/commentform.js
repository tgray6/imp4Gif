import React from 'react';


export default function CommentForm (props) {
    return (
    	<div>
        	<form>
          		<div>
            		<textarea id="commentForm" name="commentForm" placeholder="Comment on This" rows="15" required></textarea>
         	 	</div>
          		<button type='submit'>Comment</button>
        	</form>
        </div>
    );
}



