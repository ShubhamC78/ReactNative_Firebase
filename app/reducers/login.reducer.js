import * as types from '../actions/actionTypes';

const initialState = {
    root: 'Login',
    screenName: 'Login',
    name:''
  };

  export default function login(state = initialState, action) {
      switch (action.type) {
        case types.LOGIN_REQUEST:{
          return {
            ...state
          }
        }
        break;
        case types.LOGIN_SUCCESS :{
            return{
                ...state, name : action.payload
            }
        }
        default:
         return state;
        }
    }