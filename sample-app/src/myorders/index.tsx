import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MyOrder } from "./components/Order";
import {actions, selectors} from '../store'
import { Order } from './Order';

interface MapStateToPropsTypes {
  ordersList: Order[]
}

class MyOrders extends Component<any> {
  render() {
    console.log(this.props.ordersList);
    return (
      <div className="Orders-list">
        { this.props.ordersList.map((OrderObj: Order) => 
          <div >
              <MyOrder key={OrderObj.id} {...OrderObj}/>
          </div>
        )
      }
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  ordersList: selectors.myorders.getOrdersList(state)
});

export default connect<MapStateToPropsTypes>(
  mapStateToProps,
)(MyOrders);