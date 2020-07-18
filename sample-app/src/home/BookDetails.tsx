import React, {Component} from 'react';
import {RouteComponentProps} from 'react-router-dom'
import Book from '../images/book.jpg'
import {BooksList} from "../__mocks__/BooksList"

interface ComponentProps extends RouteComponentProps{
  id: number,
}

class BookDetails extends Component <ComponentProps>{

  constructor(props: ComponentProps){
    super(props);
  }
  
  render(){
    const book = BooksList.find((obj) =>{ 
      console.log(obj.id);
      return obj.id == this.props.match.params.id
    });

    return (
        <div className="Book-details-container">
            <div className="Image-container">
                <img src={Book}></img>
            </div>
            <div className="Details-container">
            <h1>{book?.title}</h1>
            <div>
              <label>Book Price: </label>
              <span>{book?.price}</span>
            </div>
            <div>
              <label>Author Name: </label>
              <span>{book?.author}</span>
            </div>
            <div>
              <label>Page Count: </label>
              <span>{book?.pages}</span>
            </div>
            <div>
              <label>ISBN: </label>
              <span>{book?.isbn}</span>
            </div>
            <div>
            <button className="details-buttons">Add to cart</button>
            <button className="details-buttons">Buy Now</button>
            </div>
            <div className="Book-Description-detail">
              <label>Description: </label>
              <p>{book?.description}</p>
            </div>
            </div>
        </div>
    )
  }
}

export default BookDetails;