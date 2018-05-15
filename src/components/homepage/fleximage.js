import React from 'react';
import { connect } from 'react-redux';

export function FlexImage (props) {
    return (
		<div className="flexItem1">
			<img src={props.images} className="flexImage1" alt="postedimage">
			</img>
        </div>
    );
}

const mapStateToProps = state => ({
  images: state.images
});

export default connect(mapStateToProps)(FlexImage);

// FlexImage.defaultProps= {
// 	images: 
// 	[
// 	"https://media3.giphy.com/media/pYfxQcXVEGF6o/200w.webp"
// 	]
// }