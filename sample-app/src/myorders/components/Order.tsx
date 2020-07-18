import React from 'react';
import "../Style.css"
import {Order} from "../Order"
import Book from '../../images/book.jpg'

export const MyOrder: React.FC<Order> = (props) => {
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
            <img className="Orders-img" src={Book} alt="Book"></img>
            <div className="Data-container">
            <span className="Book-title">{props.title}</span>
            <div>
              <label>Book Price: </label>
              <span>{props.price}</span>
            </div>
            <div>
              <label>Author Name: </label>
              <span>{props.author}</span>
            </div>
            <div>
              <label>Page Count: </label>
              <span>{props.pages}</span>
            </div>
            </div>
        </div>
    </div>
)
};