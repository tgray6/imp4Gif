import React from 'react';
import { connect } from 'react-redux';
// import {deletePost} from '../actions/actions';
import {loading} from '../actions/actions';
import './postpage.css';
import CommentForm from './commentform';
import { withRouter } from "react-router-dom";
import Spinner from 'react-spinkit';
import {API_BASE_URL} from '../config';
import LoadingComponent from '../loading/loadingcomponent';
import {fetchProtectedData} from '../actions/protected';

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
    fetch(`${API_BASE_URL}/items/` + id, {
      method: 'DELETE',
      headers:{
        Authorization: `Bearer ${this.props.authToken}`
     }
    })

    .then(res => res.json())
    .then(response => {
      console.log('Success:', response);
      return response;
    })
    .catch(error => console.error('Error:', error))
    // .then(response => this.props.dispatch(deletePost(response)));
    setTimeout(backtoPostedSection, 1000);
}
       


  renderResults(){
  

      if (this.props.itemToDisplay.type==="video"){
        return (
          <div className="postParent">
            <header>
              <h1 className="postTitle">{this.props.itemToDisplay.title}</h1>
              <p className="author">Post By: {this.props.itemToDisplay.author}</p>
            </header>
            <div>
                <video height="auto" width="100%" controls="true" className="flexImage" muted="true" autoPlay="true" loop="true">
                <source src={this.props.itemToDisplay.url} type="video/mp4" alt="postedvideo"/>
                </video>
            </div>
            <div>
            <a href ={this.props.itemToDisplay.url}  target="_blank" className="source">Source</a>
            </div>
          </div>
        )
      }

      else if (this.props.itemToDisplay.type==="youtube"){
        return(
          <div className="postParent">
            <header>
              <h1 className="postTitle">{this.props.itemToDisplay.title}</h1>
              <p className="author">Post By: {this.props.itemToDisplay.author}</p>
            </header>
              <div className="youtubeDiv">
                <iframe className="flexImage" title="youtube video" src={this.props.itemToDisplay.youTubeUrl} allowFullScreen autohide="1">
                </iframe>
              </div>
            <div>
            <a href ={this.props.itemToDisplay.url}  target="_blank"className="source">Source</a>
            </div>
          </div>
        )
      }

      else{
        return (
          <div className="postParent">
            <header className="fuck">
              <h1 className="postTitle">{this.props.itemToDisplay.title}</h1>
              <p className="author">Post By: {this.props.itemToDisplay.author}</p></header>
            <div>
              <img src={this.props.itemToDisplay.url} className="flexImage"  alt="postedimage">
              </img>
            </div>
            <div>
            <a href ={this.props.itemToDisplay.url}  target="_blank" className="source">Source</a>
            </div>
          </div>

        ) 
      }
    }
    render(){

    if (!this.props.ready){
      this.props.dispatch(fetchProtectedData());
    }


    const comments = !this.props.ready? null: this.props.itemToDisplay.comments.map((item, index) => (
      <li key={index}>{item}</li>
    ));

    //style points for deleting and routing back to root / postedsection on Delete
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
      <LoadingComponent>
      <section className="postedSection">
        <div className="flexContainer1">
          {this.props.ready? this.renderResults() : null}
        </div>

        {
          this.props.ready && this.props.userId === this.props.itemToDisplay.authorid && this.props.itemToDisplay.comments < 1?
            <div>
             <button className="deleteButton" onClick={()=>this.deleteData()}>Delete</button>
            </div>
           : null
        }

      </section>
      <section className="commentSection">
        <CommentForm />
        <hr></hr>
        <div className="commentDiv">
          <ul className="comments">{comments}</ul>
        </div>
      </section>
      </LoadingComponent>
      </div>
    );
  }
}

const mapStateToProps = (state, props )=> 
  { 
  console.log("Is it ready? " + !state.imp.loading);
  let result = 
  {
  loading: state.imp.loading,
  ready: !state.protectedData.ready,
  itemToDisplay: state.protectedData.data.find((post) => post.id === props.match.params.postId),
  authToken: state.auth.authToken,
  userId: state.auth.currentUser.userID
  }
  // console.log(result)
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