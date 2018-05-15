import React from 'react';
import { connect } from 'react-redux';

export function FlexVideo (props) {
    return (
        <div className="flexItem1">
            <video controls className="flexImage1">
             <source src={props.videos} type="video/mp4" />
            </video>
        </div>
    );
}

const mapStateToProps = state => ({
  videos: state.videos
});

export default connect(mapStateToProps)(FlexVideo);

// FlexVideo.defaultProps = {
// 	videos: 
// 	[
// 	"https://i.imgur.com/UIPYh4q.mp4"
// 	]
// }