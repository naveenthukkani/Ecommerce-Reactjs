import React, { Component } from 'react';
import {BooksList} from "../__mocks__/BooksList"
import history from '../history';
import {Books} from "./Books"
import "./Styles.css";


class Home extends Component {

  handleBookEvent =(book: Books) => {
    history.push(`/bookdetails`)
  }
  render() {
    return (
      <div className="Books-list">
        { BooksList.map((book) => 
          <div onClick={()=> this.handleBookEvent(book)}  className="Book" key={book.id}>
            <img></img>
            <p>{book.title}</p>
            <p className="Book-Description">{book.description}</p>
            <button className="Buy-button">Buy Button</button>
          </div>
        )
      }
      </div>
    )
  }
}

export default Home