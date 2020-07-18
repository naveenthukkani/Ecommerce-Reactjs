import {Book} from '../../home/Book'

export enum CartActionTypes {
    FETCH_REQUEST = "@@Cart/FETCH_REQUEST",
    FETCH_SUCCESS = "@@Cart/FETCH_SUCCESS",
    FETCH_ERROR = "@@Cart/FETCH_ERROR"
};
export interface CartState {
    readonly loading: boolean; 
    readonly cartItems: Book[];
    readonly errors?: string;
};