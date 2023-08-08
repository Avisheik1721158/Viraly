import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import Media from './components/Media/Media';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
const store = createStore(reducers, compose(applyMiddleware(thunk)));
const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/media",
    element:  <Media />,
  },
  {
    path: "/about",
    element:  <About/>,
  },
]);
ReactDOM.render(
  <Provider store={store}>
   
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById('root'),
);
