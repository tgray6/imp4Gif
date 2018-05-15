import React from 'react';
import {connect} from 'react-redux';

import FlexImage from './fleximage';
import FlexVideo from './flexvideo';



export class PostedSection extends React.Component {
	renderResults(){
		const videoList = this.props.videos.map((videos, index) =>
			<div className="flexItem1">
            	<video controls className="flexImage1" key={index}>
            		<source src={videos} type="video/mp4" />
           		</video>
           	</div>
        );
 		const imageList = this.props.images.map((images, index) =>
			<div className="flexItem1">
				<img src={images} className="flexImage1" key={index} alt="postedimage">
				</img>
        	</div>
        );       

        return (
 			[videoList, imageList]
        	)
    }
    render(){
   	 return (
     	<section className="postedSection">
       		<div className="flexContainer">
        		{this.renderResults()}
        	</div>
      	</section>
    );
	}
}

const mapStateToProps =  state => ({
	videos: state.videos,
	images: state.images
})

export default connect(mapStateToProps)(PostedSection)








// export default function PostedSection (props) {
//     return (
//       <section className="postedSection">
//         <div className="flexContainer">
//         	<FlexImage />
//         	<FlexVideo />
//         </div>
//       </section>
//     );
// }