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
    <section className="explanationSection">
  	<div id="explanationDiv">
        <div>
        <h2 style={color}>INSTRUCTIONS ON LINKS</h2>
          <ul className="landingList">
              <li>
                <p><span style={bold}>Youtube Link</span> These are easy, just copy the BASE url from the top of the browser on any youtube video. Base meaning no timestamps or anything. Correct examples below:</p>
                <p>Example url: https://www.youtube.com/watch?v=SN43u7up93I</p>
                <p>Mobile url: https:m.youtube.com/watch?v=SN43u7up93I</p>
 
              </li>
                <li>
                <p><span style={bold}>Image/Gif/mp4:</span> <span style={color2}>Desktop </span>is easy. Just Google an image, gif, mp4, and right click on what you plan to post, and click "Copy Image Address", or if its an mp4, "Copy Video Address". </p>
               </li>
                <li>
                <p><span style={bold}>Image/Gif/mp4: </span><span style={color2}>Mobile </span> Just Google an image, gif, mp4, and press and hold your finger over your selected item, and select "Open image in new tab", then copy the link in the new address bar.
                </p>
                <p>
                <span style={color2}>iPad/iPhone: </span> Works same as above, but when you hold your finger over a selected item, select "Copy", then paste into the address bar, hold your finger over the newly loaded image and select "Open image in new tab".
                </p>
               </li>
          </ul>
      </div>
    </div>
    </section>
  );
}