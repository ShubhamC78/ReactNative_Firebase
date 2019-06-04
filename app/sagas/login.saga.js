import { takeLatest, put, call, fork, select } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import * as common from '../utils/modCommon';
import Actions from 'react-native-router-flux';

export function* watchLoginRequest(action) {
    yield put({
        type: types.LOGIN_SUCCESS, 
        payload: "shubham"
    });
    yield call(common.pushScreen , "Home" );
}

export default function* root() {
    yield takeLatest(types.LOGIN_REQUEST, watchLoginRequest);
   
}