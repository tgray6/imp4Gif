import React from 'react';
import {connect} from 'react-redux';
// import {deletePost} from '../actions/actions';

import {renderPost} from '../actions/actions';

import { withRouter } from 'react-router-dom';

// import FlexImage from './fleximage';
// import FlexVideo from './flexvideo';




export class PostedSection extends React.Component {

  	nextPath(){
  		this.props.history.push('/postpage/:id');
 	 }

 	handleClickGen(id){
 		return () => {
 			this.props.dispatch(renderPost(id));
 		}
 	}

	renderResults(){
		return this.props.items.map((items, index) => {
			// index = items.id;
			if (items.type==="video"){
				return (
					<div className="flexItem" key={index}>
            			<video controls className="flexImage1" onClick={this.handleClickGen(items.id)}>
            			<source src={items.url} type="video/mp4" />
           				</video>

           			</div>
				)
			}
			else{
				return ( 
					<div className="flexItem" key={index}>
						<img src={items.url} className="flexImage1"  alt="postedimage" onClick={this.handleClickGen(items.id)}>
						</img>

        			</div>
        		) 
			}
		});
    }
    render(){
     console.log(this.props);
   	 return (
   	 	<div>
   	 	<header><h1>Recent Posts</h1></header>
     	<section className="postedSectionHome">
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

// export default connect(mapStateToProps)withRouter(PostedSection)

// export default withRouter(connect(mapStateToProps)(PostedSection));

//removed below button from lines 26 and 35 since its on the postpage anyways

//<button className="deleteButton" onClick={()=>this.props.dispatch(deletePost(items.id))}>Delete</button>






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