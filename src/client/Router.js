import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './Pages/Products';
import Services from './Pages/Services';
import Booking from './Pages/Booking';
import Checkout from './Pages/Checkout';
import App from '../App';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/products">{Products}</Route>
      <Route path="/services">{Services}</Route>
      <Route path="/booking">{Booking}</Route>
      <Route path="/checkout">{Checkout}</Route>
      <Route path="/">{App}</Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
