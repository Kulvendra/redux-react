import React,{useState,useEffect} from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App'
import store from './store'
import { Provider } from 'react-redux';



render(
  <Provider store={store}>
      <App />
  </Provider>
, document.getElementById("root"));



store.subscribe(()=>{
  console.log("Store updated",store.getState());
})

