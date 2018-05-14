import React from 'react';

export default function FlexVideo (props) {
    return (
        <div className="flexItem1">
            <video controls className="flexImage1">
             <source src={props.videos} type="video/mp4" />
            </video>
        </div>
    );
}

FlexVideo.defaultProps = {
	videos: 
	[
	"https://i.imgur.com/UIPYh4q.mp4"
	]
}