import React from 'react';

export default function Explanation() {

  let bold = {
    fontWeight: "bold"
  }

  let color = {
    color: "#5607bd"
  }

  let color2 = {
    fontWeight: "bold",
    color: "red"
  }
  return (
    <section>
  	<div id="explanationDiv">
  		<h2 style={color}>WHAT IS THIS!?</h2>
      <div>
  		  <ul className="landingList">
            <li><p><span style={bold}>Step 1.</span> Register by picking an amazing Nickname because this shows up on your post, then a Username and Password. Click Register and go Login.</p></li>
            <li><p><span style={bold}>Step 2.</span> Click that post button at the top to share an image,gif,mp4, or youtube link.</p></li>
            <li><p><span style={bold}>Step 3.</span> Click on any image to see what people have to say, and comment on the post or other comments!</p></li>
        </ul>
      </div>

      <h2 style={color}>NOTE ON COPYING LINKS</h2>
        <div>
          <ul className="landingList">
              <li>
                <p><span style={bold}>Youtube Link</span> These are easy, just copy the url from the top of the browser on any youtube video.</p>
              </li>
                <li>
                <p><span style={bold}>Image/Gif/mp4:</span> <span style={color2}>Desktop </span>is easy. Just Google an image, gif, mp4, and right click on what you plan to post, and click "Copy Image Address"</p>
               </li>
                <li>
                <p><span style={bold}>Image/Gif/mp4: </span><span style={color2}>Mobile </span> can be tricky depending on the site. The goal is to "Open image in new tab" and copy that link in the address bar. Just Google an image, gif, mp4, and press and hold your finger over your selected item, and select "Open image in new tab", then copy the link in the address bar. As mentioned, some sites can be a bit tricky or won't have this option.</p>
               </li>
          </ul>
      </div>
    </div>
    </section>
  );
}