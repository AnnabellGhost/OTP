/*Created by Zhang Xingping on 20170515*/
import { combineReducers } from 'redux';
import otp from './otpReducer.js';
import transin from './transinReducer.js';
import bankcards from './bankcardReducer.js';
const reducers=combineReducers({otp,transin,bankcards});
export default reducers;
