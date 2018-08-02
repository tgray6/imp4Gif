import React from 'react';
import {connect} from 'react-redux';
import {fetchProtectedData} from '../actions/protected';
import {Link} from 'react-router-dom';
import PostForm from '../postmodalform/postform';
import './homepage.css';
import Spinner from 'react-spinkit';


//used to help the flow of the page so that when a user clicks on a post, goes back to home, then clicks on another post, the page is scrolled to the top
// let scrollWin = () => {
//     window.scrollTo(0, 0);
// }


export class PostedSection extends React.Component {

	//This is running our main GET with fetchProtectedData to display all posts on main page.
	componentDidMount() {
        this.props.dispatch(fetchProtectedData());
  }


    //When submitting a POST via postform, the posted link determines the type of the post and renders appropriately by mapping out our protectedData.data array on protectedReducer.
	renderResults(){
		return this.props.items.map((items) => {
			if (items.type==="video"){
				return (
					<div className="flexItem" key={items.id}>
            			<Link to={`/${items.id}`}>
            			<div className="blocker">
            			</div>
            			<video height="auto" width="100%" className="flexImage1" muted="true" preload="true">
            			<source src={items.url + "#t=0.001"} type="video/mp4" alt="video post"/>
           				</video></Link>
           			</div>
				);
			}

			else if (items.type==="youtube") {
				return (
					<div className="flexItem"  key={items.id}>
            			<Link to={`/${items.id}`} className="linkwrap">
            			<div className="blocker">
            			</div>
						<iframe className="flexImage1" title="youtube video" alt="youtube post" src={items.youTubeUrl} frameBorder="0" showinfo="0"></iframe>
            			</Link>
           			</div>	
				);
			}

			else{
				return ( 
					<div className="flexItem" key={items.id}>
						<Link to={`/${items.id}`}><img src={items.url} className="flexImage1" preload='metadata' alt="img/gif post">
						</img></Link>
        			</div>
        		);
			}
		});
  };

    render(){

    if (this.props.loginLoad===true) {
      return(
        <section className="postedSection">
          <div className="flexContainer2">
            <Spinner name="wandering-cubes" color="rgb(86, 7, 189)" fadeIn='none'/>
          </div>
        </section>
      )
    }

      // scrollWin()

      //shows PostForm component instead of post data if post button is clicked.
      if (this.props.show===true) {
      	return(
			<PostForm />
      	);
      };
   	  return (
   	 	<div>
   	 		<header><h1 className="postedHeader">Recent Posts</h1></header>
     		<section className="postedSectionHome">
       			<div className="flexContainer">
        			{this.renderResults()}
        		</div>
      		</section>
      	</div>
      );
	};
};


const mapStateToProps = state => ({
  items: state.protectedData.data,
  show: state.protectedData.show,
  loginLoad: state.protectedData.loginLoad
});


export default connect(mapStateToProps)(PostedSection);
