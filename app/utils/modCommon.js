import Constants from './modConstants';
import * as types from '../actions/actionTypes';
import { Actions } from "react-native-router-flux";


export function log(logType, info) {
  if (Constants().enableLog)
    console.log(logType + " : " + info);
}

export const pushScreen = (props, screenName, params) => {
  types.mountedComponents.push(screenName);
  console.log("pushScreen"+screenName);
  Actions.push(screenName, params);
}

export const popScreen = (props, screenName) => {
  console.log("popScreen"+screenName);
  Actions.pop();
}

export const popToScreen = (props, screenName) => {
  console.log("popToScreen"+screenName);
  Actions.popTo(screenName);
}
