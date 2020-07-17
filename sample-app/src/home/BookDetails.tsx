import React, {Component} from 'react';
import {RouteComponentProps} from 'react-router-dom'

// interface ComponentProps extends RouteComponentProps{
//     title:string,
//     description: string,
//     author: string,
//     price: number,
//     pagecount: number,
//     isbn: string,
//     id: number,
// }

export default class BookDetails extends Component {
  
  render(){
    return (
        <div className="Book-details-container">
            <div className="Image-container">
                <img></img>
            </div>
            <div className="Details-container">
            <h1>Naveen</h1>
            <div>
              <label>Book Price:</label>
              <span></span>
            </div>
            <div>
              <label>Author Name:</label>
              <span></span>
            </div>
            <div>
              <label>Page Count:</label>
              <span></span>
            </div>
            <div>
              <label>ISBN:</label>
              <span></span>
            </div>
            <div>
            <button className="details-buttons">Add to cart</button>
            <button className="details-buttons">Buy Now</button>
            </div>
            <div className="Book-Description-detail">
              <label>Description:</label>
              <p>this naveen's book</p>
            </div>
            </div>
        </div>
    )
  }
}