import {Book} from '../../home/Book'

export enum BooksActionTypes {
    FETCH_REQUEST = "@@Books/FETCH_REQUEST",
    FETCH_SUCCESS = "@@Books/FETCH_SUCCESS",
    FETCH_ERROR = "@@Books/FETCH_ERROR"
};
export interface BooksState {
    readonly loading: boolean;
    readonly data: Book[];
    readonly errors?: string;
};