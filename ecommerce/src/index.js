import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { persistGate } from  'redux-persist/integration/react' ;

ReactDOM.render(
  <Provider store={store}>
    <persistGate loading={null} persistor={persistor}>
      <App />
    </persistGate>

  </Provider>
  ,
  document.getElementById('root')
);

