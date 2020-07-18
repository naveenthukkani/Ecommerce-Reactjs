import { action } from "typesafe-actions";
import { OrdersActionTypes } from "./types";
import { Order} from '../../myorders/Order';


const actions = {
  fetchRequest:(data: Order) => action(OrdersActionTypes.FETCH_REQUEST, data),
  fetchSuccess:(data: Order[]) =>
    action(OrdersActionTypes.FETCH_SUCCESS, data),
  fetchError:(message: string) =>
    action(OrdersActionTypes.FETCH_ERROR, message)
}

export default actions;