import React from 'react';


export default function PostedSection (props) {
    return (
      <section className="postedSection">
        <div className="flexContainer">
          <div className="flexItem">
          	<img src={props.image} className="flexImage" alt="fleximage"> 
          	</img>
          </div>
        </div>
      </section>
    );
}

PostedSection.defaultProps = {
	image: "https://media3.giphy.com/media/pYfxQcXVEGF6o/200w.webp"
}