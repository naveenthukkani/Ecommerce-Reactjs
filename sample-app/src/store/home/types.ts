import {Books} from '../../home/Books'

export enum BooksActionTypes {
    FETCH_REQUEST = "@@Books/FETCH_REQUEST",
    FETCH_SUCCESS = "@@Books/FETCH_SUCCESS",
    FETCH_ERROR = "@@Books/FETCH_ERROR"
};
export interface BooksState {
    readonly loading: boolean;
    readonly data: Books[];
    readonly errors?: string;
};