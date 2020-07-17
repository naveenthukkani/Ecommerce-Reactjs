import React, { Component } from 'react';
import { Order } from "./components/Order";
import {OrdersList} from "../__mocks__/MyOrders"


export default class MyOrders extends Component {
  render() {
    return (
      <div className="Orders-list">
        { OrdersList.map((OrderObj) => 
          <div >
              <Order key={OrderObj.id} {...OrderObj}/>
          </div>
        )
      }
      </div>
    )
  }
}