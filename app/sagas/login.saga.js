import { takeLatest, put, call, fork, select } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import * as common from '../utils/modCommon';

export function* watchLoginRequest(action) {
    yield put({
        type: types.LOGIN_SUCCESS, 
        payload: action.payload
    });

    yield call(common.pushScreen , "test" , "Home" );
    
}

export default function* root() {
    yield takeLatest(types.LOGIN_REQUEST, watchLoginRequest);
   
}