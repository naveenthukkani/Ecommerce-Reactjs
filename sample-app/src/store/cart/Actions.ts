import { action } from "typesafe-actions";
import { CartActionTypes } from "./Types";
import { Book} from '../../home/Book';


const actions = {
  fetchRequest:(data: Book) => action(CartActionTypes.FETCH_REQUEST, data),
  fetchSuccess:(data: Book[]) =>
    action(CartActionTypes.FETCH_SUCCESS, data),
  fetchError:(message: string) =>
    action(CartActionTypes.FETCH_ERROR, message)
}

export default actions;