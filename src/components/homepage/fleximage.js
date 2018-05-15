import React from 'react';
import { connect } from 'react-redux';


export function FlexImage(props) {
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






// export class FlexImage extends React.Component {
// 	renderResults(){
//  		const imageList = this.props.images.map((images, index) =>
			
// 				<img src={images} className="flexImage1" key={index} alt="postedimage">
// 				</img>

//         );       

//         return (
//  			[imageList]
//         	)
//     }
//     render(){
//    	 return (
//    	 	<div className="flexItem1">
//         	{this.renderResults()}
//         </div>
//     );
// 	}
// }

// const mapStateToProps = state => ({
//   images: state.images
// });

// export default connect(mapStateToProps)(FlexImage);