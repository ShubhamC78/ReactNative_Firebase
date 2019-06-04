import * as types from './actionTypes';

export function login(data) {
    return {
      type: types.LOGIN_REQUEST,
      payload:data
    };
  }