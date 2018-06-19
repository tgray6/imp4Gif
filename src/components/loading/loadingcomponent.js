import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

export function LoadingComponent(props){
	// console.log(props.ready);
	if(props.ready){
		return(
			<div>
				{props.children}
			</div>
		)
	} else 
	{
		return(
			<section className="postedSection">
			<div className="flexContainer2">
         		<Spinner name="wandering-cubes" color="rgb(86, 7, 189)" fadeIn="none" />
    		</div>
    		</section>
    	)
	}
}



// const mapStateToProps = (state, props) => {
// 	console.log(state,props)
// 	return
// 	{
// 	ready: state.imp.loading
// 	}
// };


const mapStateToProps = (state, props )=> 
  { 
  let result = 
  {
	ready: !state.protectedData.ready
  }
  return result
};

export default connect(mapStateToProps)(LoadingComponent);