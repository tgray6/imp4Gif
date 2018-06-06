import React from 'react';
import { connect } from 'react-redux';
import {deletePost} from '../actions/actions';
import {loading} from '../actions/actions';
import './postpage.css';
import CommentForm from './commentform';
import { withRouter } from "react-router-dom";
import Spinner from 'react-spinkit';


export class ItemToDisplay extends React.Component {




deleteData() {

  let toggleLoading = () => {
    this.props.dispatch(loading());
  };

  toggleLoading();

  let backtoPostedSection = () => {
  this.props.history.push('/');
  toggleLoading();
  }

  
  let id = this.props.itemToDisplay.id
  fetch("http://localhost:8888/items/" + id, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response);
      return response;
    })
    .then(response => this.props.dispatch(deletePost(response)));
    setTimeout(backtoPostedSection, 2000);
}
       


  renderResults(){
  

      if (this.props.itemToDisplay.type==="video"){
        return (
          <div>
            <header>
              <h1 className="postTitle">{this.props.itemToDisplay.title}</h1>
              <p className="author">Post By: {this.props.itemToDisplay.author}</p>
            </header>
            <div className="flexItemTest">
                <video height="auto" width="100%" controls="true" className="flexImage">
                <source src={this.props.itemToDisplay.url} type="video/mp4" alt="postedvideo"/>
                </video>
            </div>
            <a href ={this.props.itemToDisplay.url}  target="_blank" className="source">Source</a>
          </div>
        )
      }

      else if (this.props.itemToDisplay.type==="youtube"){
        return(
          <div>
            <header>
              <h1 className="postTitle">{this.props.itemToDisplay.title}</h1>
              <p className="author">Post By: {this.props.itemToDisplay.author}</p>
            </header>


              <iframe id="iframeId" className="flexImage" title="youtube video" src={this.props.itemToDisplay.youTubeUrl} allowFullScreen autohide="1"></iframe>

            <a href ={this.props.itemToDisplay.url}  target="_blank"className="source">Source</a>
          </div>
        )
      }

      else{
        return (
          <div>
            <header>
              <h1 className="postTitle">{this.props.itemToDisplay.title}</h1>
              <p className="author">Post By: {this.props.itemToDisplay.author}</p></header>
            <div className="flexItemTest">
              <img src={this.props.itemToDisplay.url} className="flexImage"  alt="postedimage">
              </img>
            </div>
            <a href ={this.props.itemToDisplay.url}  target="_blank" className="source">Source</a>
          </div>

        ) 
      }
    }
    render(){

    const comments = this.props.itemToDisplay.comments.map((item, index) => (
      <li key={index}>{item}</li>
    ));

    if (this.props.loading===true) {
      return(
        <section className="postedSection">
        <div className="flexContainer2">
          <Spinner name="wandering-cubes" color="rgb(86, 7, 189)" noFadeIn />
        </div>
        </section>
      )
    }

    
     return (
      <div>
      <section className="postedSection">
        <div className="flexContainer1">
          {this.renderResults()}
        </div>
        <div>
        <button className="deleteButton" onClick={()=>this.deleteData()}>Delete</button>
        </div>
      </section>
      <section>
        <CommentForm />
        <hr></hr>
        <div className="commentSection">
          <ul className="comments">{comments}</ul>
        </div>
      </section>
      </div>
    );
  }
}

const mapStateToProps = (state, props )=> 
  { 
  console.log(props.match.params);
  let result = 
  {
  loading: state.imp.loading,
  itemToDisplay: state.imp.items.find((post) => post.id === props.match.params.postId)
  }
  console.log(result)
  return result
};


export default connect(mapStateToProps)(withRouter(ItemToDisplay));














// import React from 'react';
// import { connect } from 'react-redux';

// export function PostedSection (props) {
//     return (
//       <section className="postedSection">
//         <div className="flexContainer">
//           <div className="flexItem">
//            <img src={props.image} className="flexImage" alt="fleximage"> 
//            </img>
//           </div>
//         </div>
//       </section>
//     );
// }

// const mapStateToProps = state => ({
//   image: state.items[3].url
// });

// export default connect(mapStateToProps)(PostedSection);

// PostedSection.defaultProps = {
//  image: "https://media3.giphy.com/media/pYfxQcXVEGF6o/200w.webp"
// }