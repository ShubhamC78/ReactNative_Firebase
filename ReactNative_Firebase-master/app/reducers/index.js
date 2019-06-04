import {combineReducers } from 'redux'; 
import loginReducer from './login.reducer';
import * as types from '../actions/actionTypes';

const appReducer = combineReducers({
    login: loginReducer,
})

const rootReducer = (state, action) => {
    if (action.type === types.RESET_STATE) {  
    }
    return appReducer(state, action)
}
  
export default rootReducer;