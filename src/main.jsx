import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store';
import { populateProduce } from './store/produce'
import { addItem } from './store/cart';
import App from './App';
import './index.css';

const store = configureStore();

if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
  window.addItem = addItem;
}

// check if the state is empty
// const test = store.getState();
// console.log({...test});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

