import React from 'react';
import { connect } from 'react-redux';
import {deletePost} from '../actions/actions';
import CommentSection from './commentsection';
import './postpage.css';
import {Link} from 'react-router-dom';

import CommentForm from './commentform';
import Comments from './comments'

export class ItemToDisplay extends React.Component {


  renderResults(){

      // function clickEvent()
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


              <iframe id="iframeId" className="flexImage" src={this.props.itemToDisplay.youtubeUrl} allowFullScreen autohide="1"></iframe>

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

     return (
      <div>
      <section className="postedSection">
        <div className="flexContainer1">
          {this.renderResults()}
        </div>
        <div>
        <Link to={`/`}><button className="deleteButton" onClick={()=>this.props.dispatch(deletePost(this.props.itemToDisplay.id))}>Delete</button></Link>
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
//<CommentForm />  removed from line 83
const mapStateToProps = (state, props )=> 
  { 
  console.log(props.match.params);
  let result = 
  {
  itemToDisplay: state.items.find((post) => post.id == props.match.params.postId)
 }
  console.log(result)
  return result
};


export default connect(mapStateToProps)(ItemToDisplay);














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