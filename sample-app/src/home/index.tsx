import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BooksList} from "../__mocks__/BooksList"
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
  render() {
    return (
      <div className="Books-list">
        { BooksList.map((book) => 
          <div onClick={()=> this.handleBookEvent(book)}  className="Book" key={book.id}>
            <img src={Book}></img>
            <p className="Book-Description">{book.title}</p>
            <p className="Book-Description">{book.description}</p>
            <button className="Buy-button">Buy Button</button>
          </div>
        )
      }
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch: any)=> ({
  actions: {
    fetchBooksList: () => dispatch(actions.home.fetchRequest())
  }
});

const mapStateToProps = (state: any) => ({
  ListOfBooks: selectors.home.getBooksList(state)
});

export default connect<MapStateToPropsTypes, any>(
  mapStateToProps,
  mapDispatchToProps)
(Home);