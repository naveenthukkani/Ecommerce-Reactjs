import React from 'react';
import { useSelector } from "react-redux"
import "../Style.css";
import { Book } from '../../home/Book';

export const Cart = () => {
    const cartItmes : Book[] = useSelector((state:any) => state.cart.cartItems)
    const totalPrice = cartItmes.reduce((value,Obj:any) =>{
        return Obj.price + value ;
    },0);
 return (
    <div className="Cart-sub-conatiner">
        <p className="Heading">Shopping Bag:</p>
        <div className="Book-Names">
        { cartItmes.map((bookObj :any) =>
            <p key={bookObj.id}>{bookObj.title}</p>
        )}
        </div>
     { cartItmes.length !==0 ? <div className="Payment-info">
            <p className="Heading">Payment info</p>
            <div className="Payment-itmes">
            <div>
                <label>Total Price: </label>
                <span>{totalPrice} rupes</span>
            </div>
            <div>
                <label>tax:</label>
                <span> 10% rupes</span>
            </div><div>
                <label>shipping price:</label>
                <span> 40 rupes</span>
            </div>
            <button className="Address-buttons">Checkout</button>
            <button className="Address-buttons">Cancel</button>
        </div>
    </div> : ""}
    </div>
     
)
};