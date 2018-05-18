import React from 'react';
import {connect} from 'react-redux';

// import FlexImage from './fleximage';
// import FlexVideo from './flexvideo';



export class PostedSection extends React.Component {
	renderResults(){
		return this.props.items.map((items, index) => {
			// function clickEvent()
			if (items.type==="video"){
				return (
					<div className="flexItem1" key={index}>
            			<video controls className="flexImage1" >
            			<source src={items.url} type="video/mp4" />
           				</video>
           			</div>
				)
			}
			else{
				return ( 
					<div className="flexItem1" key={index}>
						<img src={items.url} className="flexImage1"  alt="postedimage">
						</img>
        			</div>
        		) 
			}
		});
    }
    render(){
   	 return (
   	 	<div>
   	 	<header><h1>Recent Posts</h1></header>
     	<section className="postedSection">
       		<div className="flexContainer">
        		{this.renderResults()}
        	</div>
      	</section>
      	</div>
    );
	}
}

const mapStateToProps =  state => ({
	items: state.items
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