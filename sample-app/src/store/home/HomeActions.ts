import { action } from "typesafe-actions";
import { BooksActionTypes } from "./Types";
import { Book} from '../../home/Book';


const actions = {
  fetchRequest:() => action(BooksActionTypes.FETCH_REQUEST),
  fetchSuccess:(data: Book[]) =>
    action(BooksActionTypes.FETCH_SUCCESS, data),
  fetchError:(message: string) =>
    action(BooksActionTypes.FETCH_ERROR, message)
}

export default actions;

