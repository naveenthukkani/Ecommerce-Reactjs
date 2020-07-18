import { action } from "typesafe-actions";
import { BooksActionTypes } from "./types";
import { Books} from '../../home/Books';


const actions = {
  fetchRequest:() => action(BooksActionTypes.FETCH_REQUEST),
  fetchSuccess:(data: Books[]) =>
    action(BooksActionTypes.FETCH_SUCCESS, data),
  fetchError:(message: string) =>
    action(BooksActionTypes.FETCH_ERROR, message)
}

export default actions;

