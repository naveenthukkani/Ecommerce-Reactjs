import {Order} from '../../myorders/Order'

export enum OrdersActionTypes {
    FETCH_REQUEST = "@@Orders/FETCH_REQUEST",
    FETCH_SUCCESS = "@@Orders/FETCH_SUCCESS",
    FETCH_ERROR = "@@Orders/FETCH_ERROR",
    DELETE_ORDER = "@@Orders/DELETE_ORDER"
};
export interface OrdersState {
    readonly loading: boolean; 
    readonly orders: Order[];
    readonly errors?: string;
};