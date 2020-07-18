import { action } from "typesafe-actions";
import { OrdersActionTypes } from "./types";
import { Orders} from '../../myorders/Orders';


const actions = {
  fetchRequest:() => action(OrdersActionTypes.FETCH_REQUEST),
  fetchSuccess:(data: Orders[]) =>
    action(OrdersActionTypes.FETCH_SUCCESS, data),
  fetchError:(message: string) =>
    action(OrdersActionTypes.FETCH_ERROR, message)
}

export default actions;