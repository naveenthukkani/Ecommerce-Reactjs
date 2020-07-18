import {Orders} from '../../myorders/Orders'

export enum OrdersActionTypes {
    FETCH_REQUEST = "@@Orders/FETCH_REQUEST",
    FETCH_SUCCESS = "@@Orders/FETCH_SUCCESS",
    FETCH_ERROR = "@@Orders/FETCH_ERROR"
};
export interface OrdersState {
    readonly loading: boolean; 
    readonly myorders: Orders[];
    readonly errors?: string;
};