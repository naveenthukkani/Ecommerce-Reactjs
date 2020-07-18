import React, {Component} from 'react';
import { connect } from 'react-redux';
import {RouteComponentProps} from 'react-router-dom'
import Book from '../images/book.jpg'
import {actions, selectors} from '../store'
import {Books} from "./Books"

interface ComponentProps extends RouteComponentProps{
  id: number,
}

interface MapStateToPropsTypes {
  ListOfBooks: Books[]
}
class BookDetails extends Component <any>{

  constructor(props:any){
    super(props);
  }

  render(){
    const book = this.props.ListOfBooks.find((obj: any) =>{ 
      return obj.id ===Number(this.props.match.params.id)
    });
    
    return (
        <div className="Book-details-container">
            <div className="Image-container">
                <img src={Book} alt="Book"></img>
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
const mapStateToProps = (state: any) => ({
  ListOfBooks: selectors.home.getBooksList(state)
});

export default connect<MapStateToPropsTypes>(
  mapStateToProps,
)(BookDetails);