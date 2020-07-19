import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import {Book} from "./Book"
import "./Styles.css";
import BookImage from '../images/book.jpg'
import {actions, selectors} from '../store'
import { Order } from '../myorders/Order';

interface MapStateToPropsTypes {
  listOfBooks: Book[]
}

class Home extends Component<any> {
  constructor(props:any){
    super(props);
  }
   componentDidMount() {
     this.props.actions.fetchBooksList();
  }

  handleBookEvent =(book: Book) => {
    history.push(`/bookdetails/${book.id}`)
  }

  buyButtonAction = (e:any,book: Book) => {
    const orderObj :Order= {
      "date": new Date().toLocaleString(),
      "status": "Delivered",
      "title": book.title,
      "subtitle": "",
      "author": book.author,
      "price": book.price,
      "id":book.id,
      "pages": book.pages,
      "isbn": book.isbn
    } 
    alert(`${book.title} book is checkout succefully `)
    e.stopPropagation();
    this.props.actions.buyBook(orderObj);
  }

  render() {
    const {listOfBooks} = this.props;
    return (
      <div className="Books-list">
        { listOfBooks.length ? (
          listOfBooks.map((book: any) => 
          <div onClick={()=> this.handleBookEvent(book)}  className="Book" key={book.id}>
            <img src={BookImage} alt="Book"></img>
            <p className="Book-Description">{book.title}</p>
            <p className="Book-Description">{book.description}</p>
            <button className="Buy-button" onClick={(e) => this.buyButtonAction(e,book)}>Buy Button</button>
          </div>
        )) :(<div className="No-data">
              <h1>No Data found.</h1>
        </div>)}
  </div>)
  }
}

const mapDispatchToProps=(dispatch: any)=> ({
  actions: { 
    fetchBooksList: () => dispatch(actions.home.fetchRequest()),
    buyBook: (orderObj: Order) => dispatch(actions.myorders.fetchRequest(orderObj))
  }
});

const mapStateToProps = (state: any) => ({
  listOfBooks: selectors.home.getBooksList(state)
});

export {Home};
export default connect<MapStateToPropsTypes, any>(
  mapStateToProps,
  mapDispatchToProps)
(Home);