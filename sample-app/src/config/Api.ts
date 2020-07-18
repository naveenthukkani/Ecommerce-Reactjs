import axios from "axios";
import {API_URL} from './constants'

const instance = axios.create({
  responseType: 'json',
});

const booksApi ={
  getListOfBooks(path: any): any {
      return instance.get(`${API_URL}${path}`).then((response)=>{
          return response;
      })
  }
}

export {booksApi};