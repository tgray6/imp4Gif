import React from 'react';
import { connect } from 'react-redux';
import {deletePost} from '../actions/actions';


export class PostedSection extends React.Component {

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
                <video controls className="flexImage">
                <source src={this.props.itemToDisplay.url} type="video/mp4" />
                </video>
            </div>
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
          </div>

        ) 
      }
    }
    render(){
     return (
      <section className="postedSection">
        <div className="flexContainer1">
          {this.renderResults()}
        </div>
        <div>
        <button className="deleteButton" onClick={()=>this.props.dispatch(deletePost(this.props.itemToDisplay.id))}>Delete</button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  itemToDisplay: state.itemToDisplay
});


export default connect(mapStateToProps)(PostedSection);














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