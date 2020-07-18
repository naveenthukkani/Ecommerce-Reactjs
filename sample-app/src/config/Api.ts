import axios from "axios";
import {API_URL} from './constants'

const booksApi ={
  getListOfBooks(path: any): any {
      console.log(`${API_URL}${path}`);
      return axios.get(`${API_URL}${path}`).then((response)=>{
            return response;
      })
  }
}

export {booksApi};