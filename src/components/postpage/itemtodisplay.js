import React from 'react';
import { connect } from 'react-redux';
// import {deletePost} from '../actions/actions';
import './postpage.css';
import {Link} from 'react-router-dom';
// import {fetchItems} from '../actions/actions';
import CommentForm from './commentform';
// import {goHome} from '../actions/actions';


export class ItemToDisplay extends React.Component {

  // goHome = () => {
  //   this.props.dispatch(goHome())
  // };

deleteData(id) {
  return fetch("http://localhost:8888/items/" + id, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  // goHome()
}
       


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

     return (
      <div>
      <section className="postedSection">
        <div className="flexContainer1">
          {this.renderResults()}
        </div>
        <div>
        <Link to={`/`}><button className="deleteButton" onClick={()=>this.deleteData(this.props.itemToDisplay.id)}>Delete</button></Link>
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
  itemToDisplay: state.imp.items.find((post) => post.id === props.match.params.postId)
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