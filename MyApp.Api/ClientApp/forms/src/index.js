import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import {NestedRoute} from './NestedRoute';
import IndividualItem from './IndividualItem';
import Items from './Items';
import Order from './Order';
import {ToastContainer} from 'react-toastify';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css'
import { Item } from 'semantic-ui-react';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <NestedRoute exact path="/" component={Items} />
      <NestedRoute path="/Item/:id" component={IndividualItem} />
      <NestedRoute path="/Order/:id" component={Order} />
    </Switch>
    <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
