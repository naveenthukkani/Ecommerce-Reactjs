import React, { Component } from 'react';
import { Address } from "./components/Address";
import { Cart } from "./components/Cart";

class CartItems extends Component<any> {
  render() {
    return (
      <div className="Main-container">
      <div className="Adress-container">
            <Address />
      </div>
      <div className="Cart-container">
          <div >
              <Cart />
          </div>
      </div>
      </div>
    )
  }
}

export default CartItems;