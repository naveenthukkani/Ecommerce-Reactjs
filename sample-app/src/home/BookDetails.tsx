import React, { Component } from 'react';

export default class BookDetails extends Component {
  render() {
    return (
        <div className="Book-details-container">
            <div className="Image-container">
                <img></img>
            </div>
            <div className="Details-container">
            <h1>naveen</h1>
            <p>8</p>
            <div>
            <button className="details-buttons">Add to cart</button>
            <button className="details-buttons">Buy Now</button>
            </div>
            <p className="Book-Description">discription</p>
            </div>
        </div>
    )
    
  }
}