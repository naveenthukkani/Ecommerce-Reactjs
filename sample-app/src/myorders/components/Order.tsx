import React from 'react';
import { useDispatch} from 'react-redux'
import "../Style.css"
import {Order} from "../Order"
import BookImage from '../../images/book.jpg';
import {actions} from '../../store';


export const MyOrder: React.FC<Order> = (props) => {
  const dispatch = useDispatch()
  const deleteAction = (e:any,book: any) => {
    dispatch(actions.myorders.deleteOrder(book));
  }

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
            <img className="Orders-img" src={BookImage} alt="Book"></img>
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
            <button className="Delete-button" onClick={(e) => deleteAction(e,props)}>Delete</button>
            </div>
        </div>
    </div>
)
};