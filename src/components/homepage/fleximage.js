import React from 'react';

export default function FlexImage (props) {
    return (
		<div className="flexItem1">
			<img src={props.images} className="flexImage1" alt="postedimage">
			</img>
        </div>
    );
}

FlexImage.defaultProps= {
	images: 
	[
	"https://media3.giphy.com/media/pYfxQcXVEGF6o/200w.webp"
	]
}