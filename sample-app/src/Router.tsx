import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from "./home";
import MyOrders from "./myorders";
import Cart from "./cart";
import BookDetails from "./home/BookDetails"

export const AppRouter = () => {
  return (
      <div>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/myorders"><MyOrders /></Route>
          <Route path="/cart"><Cart /></Route>
          <Route path="/bookdetails/:id" component={BookDetails}></Route>
        </Switch>
      </div>
  );
}