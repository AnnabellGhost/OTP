import React from 'react';
import ReactDOM from 'react-dom';
import HocForOtp from './HocForOtp.js';
import Otp from './Otp.js';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import reducers from './reducers/otpReducer.js';
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}
// <Otp />

var store=createStore(reducers,applyMiddleware(logger));
// const OTP=HocForOtp(Otp);
render(
    <Provider store={store}>
      <Otp />
    </Provider>,
    document.getElementById('root')
);
