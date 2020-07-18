import React from 'react';
import "../Style.css";

export const Address = () => {
return (
    <div className="Address-sub-conatiner">
        <p className="Heading">Shipping Address:</p>
        <textarea className="Address-box">
        </textarea>
    <div>
      <button className="Address-buttons">Save Address</button>
      <button className="Address-buttons">Edit Address</button>
    </div>    
    </div>
)
};