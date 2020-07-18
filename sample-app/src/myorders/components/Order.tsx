import React from 'react';
import "../Style.css"
import {Orders} from "../Orders"
import Book from '../../images/book.jpg'

export const Order: React.FC<Orders> = (props) => {
return (
    <div className="Order-conatiner" key={props.id}>
      <div className="Header-view">
            <div className="Date-string">
                <label>Order Placed:  </label>
                <span>{props.date}</span>
            </div>
            <div className="Status">
                <label>Status:  </label>
                <span>{props.status}</span>
            </div>
      </div>
        <div className="Orders-data-container">
            <img className="Orders-img" src={Book}></img>
            <div className="Data-container">
            <span className="Book-title">{props.bookTitle}</span>
            <div>
              <label>Book Price: </label>
              <span>{props.bookPrice}</span>
            </div>
            <div>
              <label>Author Name: </label>
              <span>{props.authorName}</span>
            </div>
            <div>
              <label>Page Count: </label>
              <span>{props.pageCount}</span>
            </div>
            </div>
        </div>
    </div>
)
};

Order.defaultProps ={
    date: new Date().toLocaleDateString(),
    status:"Delivered",
    bookTitle: "maths",
    authorName: "Naveen",
    bookPrice: 80,
    imageUrl: ""
}