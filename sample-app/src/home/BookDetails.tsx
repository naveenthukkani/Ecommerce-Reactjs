import React, {Component} from 'react';
import { connect } from 'react-redux';
import {RouteComponentProps} from 'react-router-dom'
import BookImage from '../images/book.jpg'
import {actions, selectors} from '../store'
import {Book} from "./Book"
import { Order } from '../myorders/Order';

interface ComponentProps extends RouteComponentProps{
  id: number,
}

interface MapStateToPropsTypes {
  listOfBooks: Book[]
}
class BookDetails extends Component <any>{
  constructor(props:any){
    super(props);
  }

  buyButtonAction = (e:any,book: Book) => {
    const orderObj :Order= {
      "date": new Date().toLocaleString(),
      "status": "Delivered",
      "title": book?.title,
      "subtitle": "",
      "author": book?.author,
      "price": book?.price,
      "id":book?.id,
      "pages": book?.pages,
      "isbn": book?.isbn
    } 
    alert(`${book.title} book checkout succefully `)
    e.stopPropagation();
    this.props.actions.buyBook(orderObj);
  }

  addToCartAction = (e: any , book: Book) =>{
    alert(`${book.title} book added to cart succefully `)
    e.stopPropagation();
    this.props.actions.addToCart(book);
  }

  render(){
    const book = this.props.listOfBooks.find((obj: any) =>{ 
      return obj.id ===Number(this.props.match.params.id)
    });
    
    return (
      <div>
        {book ? <div className="Book-details-container">
            <div className="Image-container">
                <img src={BookImage} alt="Book"></img>
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
            <button className="details-buttons" onClick={(e) => this.addToCartAction(e,book)}>Add to cart</button>
            <button className="details-buttons" onClick={(e) => this.buyButtonAction(e,book)}>Buy Now</button>
            </div>
            <div className="Book-Description-detail">
              <label>Description: </label>
              <p>{book?.description}</p>
            </div>
            </div>
            </div> :""}
        </div>
    )
  }
}
const mapDispatchToProps=(dispatch: any)=> ({
  actions: { 
    buyBook: (orderObj: Order) => dispatch(actions.myorders.fetchRequest(orderObj)),
    addToCart: (book: Book)=> dispatch(actions.cart.fetchRequest(book))
  }
});
const mapStateToProps = (state: any) => ({
  listOfBooks: selectors.home.getBooksList(state)
});

export {BookDetails}
export default connect<MapStateToPropsTypes,any>(
  mapStateToProps,
  mapDispatchToProps
)(BookDetails);