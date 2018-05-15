import React from 'react';
import { connect } from 'react-redux';


export function FlexVideo(props) {
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





// export class FlexVideo extends React.Component {
//     renderResults(){
//         const videoList = this.props.videos.map((videos, index) =>
            
//                 <video controls className="flexImage1" key={index}>
//                     <source src={videos} type="video/mp4" />
//                 </video>

//         );      

//         return (
//             [videoList]
//             );
//     }
//     render(){
//      return (
//         <div className="flexItem1">
//             {this.renderResults()}
//         </div>
//     );
//     }
// }

// const mapStateToProps = state => ({
//   videos: state.videos
// });

// export default connect(mapStateToProps)(FlexVideo);
