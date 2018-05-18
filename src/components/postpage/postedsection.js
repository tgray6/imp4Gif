import React from 'react';
import { connect } from 'react-redux';

export function PostedSection (props) {
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

const mapStateToProps = state => ({
  image: state.items[3].url
});

export default connect(mapStateToProps)(PostedSection);

// PostedSection.defaultProps = {
// 	image: "https://media3.giphy.com/media/pYfxQcXVEGF6o/200w.webp"
// }