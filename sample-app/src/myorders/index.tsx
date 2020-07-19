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
    return (
      <div className="Orders-list">
        { this.props.ordersList.map((OrderObj: Order) => 
          <div key={OrderObj.id}>
              <MyOrder {...OrderObj}/>
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

export {MyOrders};
export default connect<MapStateToPropsTypes>(
  mapStateToProps,
)(MyOrders);