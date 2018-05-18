import React from 'react';

export default function Explanation() {

  let bold = {
    fontWeight: "bold"
  }
  return (
    <section>
  	<div id="explanationDiv">
  		<h2>WHAT IS THIS!?</h2>
  		<ul className="landingList">
            <li><p><span style={bold}>Step 1.</span> Register by picking an amazing Nickname because this shows up on your post, then a Username and Password. Click Register and go Login.</p></li>
            <li><p><span style={bold}>Step 2.</span> Click that post button at the top to share an image,gif, or mp4.</p></li>
            <li><p><span style={bold}>Step 3.</span> Click on any image to see what people have to say, and comment on the post or other comments!</p></li>
        </ul>
    </div>
    </section>
  );
}