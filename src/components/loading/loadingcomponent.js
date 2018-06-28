import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';


//this loading component is used solely to fix issues when a user is viewing an individual post and presses refresh button.(Prior to this, when pressing refresh, you would get props.items...UNDEFINED) We take this component, and wrap it around our return components on itemtodisplay.js, line 139 and 163 <LoadingComponent />. It determines if a state is ready. If not, the loading component is used to replace the undefined errors that are returned, and then we dispatch fetchProtectedData on itemtodisplay.js, lines 117-119 which changes the boolean to stop showing the LoadingComponent. When you see this.props.ready on item.to.display, its used to stop the undefined errors on each of the components.
export function LoadingComponent(props){
	if(props.ready){
		return(
			<div>
				{props.children}
			</div>
		)
	} else {
		return(
			<section className="postedSection">
				<div className="flexContainer2">
         			<Spinner name="wandering-cubes" color="rgb(86, 7, 189)" fadeIn="none" />
    			</div>
    		</section>
    	)
	}
}


const mapStateToProps = (state, props )=> { 
  let result =
  {
	ready: !state.protectedData.ready
  }
  return result
};


export default connect(mapStateToProps)(LoadingComponent);