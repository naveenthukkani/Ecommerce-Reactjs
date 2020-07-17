import React from 'react';
import "../Style.css"
import {Orders} from "../Orders"

export const Order: React.FC<Orders> = (props) => {
return (
    <div className="Order-conatiner">
      <div className="Header-view">
            <div className="Date-string">
                <label>Order Placed:</label>
                <span>{props.date}</span>
            </div>
            <div className="Status">
                <label>Status:</label>
                <span>{props.status}</span>
            </div>
      </div>
        <div className="Orders-data-container">
            <img className="Orders-img"></img>
            <div className="Data-container">
            <h3>{props.bookTitle}</h3>
            <div>
              <label>Book Price:</label>
              <span>{props.bookPrice}</span>
            </div>
            <div>
              <label>Author Name:</label>
              <span>{props.authorName}</span>
            </div>
            <div>
              <label>Page Count:</label>
              <span>{props.pageCount}</span>
            </div>
            </div>
        </div>
    </div>
)
};

Order.defaultProps ={
    date: new Date().toLocaleString(),
    status:"Delivered",
    bookTitle: "maths",
    authorName: "Naveen",
    bookPrice: 80,
    imageUrl: ""
}