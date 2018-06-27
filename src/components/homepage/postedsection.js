import React from 'react';
import {connect} from 'react-redux';
import {fetchProtectedData} from '../actions/protected';
import {Link} from 'react-router-dom';
import PostForm from '../postmodalform/postform';
import './homepage.css';


export class PostedSection extends React.Component {

	componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }


	renderResults(){
		return this.props.items.map((items) => {
			if (items.type==="video"){
				return (
					<div className="flexItem" key={items.id}>
            			<Link to={`/${items.id}`}>
            			<div className="blocker">
            			</div>
            			<video height="auto" width="100%" className="flexImage1" muted="true" preload="true">
            			<source src={items.url + "#t=2"} type="video/mp4" alt="video post"/>
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
  show: state.protectedData.show
});


export default connect(mapStateToProps)(PostedSection);
