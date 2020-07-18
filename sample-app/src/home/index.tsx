import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';
import {Books} from "./Books"
import "./Styles.css";
import Book from '../images/book.jpg'
import {actions, selectors} from '../store'

interface MapStateToPropsTypes {
  ListOfBooks: Books[]
}

class Home extends Component<any> {
  constructor(props:any){
    super(props);
  }
   componentDidMount() {
     this.props.actions.fetchBooksList();
  }

  handleBookEvent =(book: Books) => {
    history.push(`/bookdetails/${book.id}`)
  }

  buyButtonAction = (book: Books) => {
    this.props.actions.fetchBooksList(book);
  }

  render() {
    return (
      <div className="Books-list">
        { this.props.ListOfBooks.map((book: any) => 
          <div onClick={()=> this.handleBookEvent(book)}  className="Book" key={book.id}>
            <img src={Book} alt="Book"></img>
            <p className="Book-Description">{book.title}</p>
            <p className="Book-Description">{book.description}</p>
            <button className="Buy-button" onClick={() => this.buyButtonAction(book)}>Buy Button</button>
          </div>
        )
      }
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch: any)=> ({
  actions: { 
    fetchBooksList: () => dispatch(actions.home.fetchRequest()),
    addBookTocart: (book: Books) => dispatch(actions.myOrders.addBookTocart(book))
  }
});

const mapStateToProps = (state: any) => ({
  ListOfBooks: selectors.home.getBooksList(state)
});

export default connect<MapStateToPropsTypes, any>(
  mapStateToProps,
  mapDispatchToProps)
(Home);