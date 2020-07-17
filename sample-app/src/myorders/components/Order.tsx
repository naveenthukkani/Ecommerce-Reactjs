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
            <img></img>
            <div className="Data-container">
            <h2>Naveen</h2>
            <div>
              <label>Book Price:</label>
              <span></span>
            </div>
            <div>
              <label>Author Name:</label>
              <span></span>
            </div>
            <div>
              <label>Page Count:</label>
              <span></span>
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