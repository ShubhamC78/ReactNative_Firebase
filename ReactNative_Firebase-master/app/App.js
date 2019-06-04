/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import Routes from './navigation/routes';
import configureStore from './store/appstore';
import { Provider } from 'react-redux';

//This function intializes our store
const store = configureStore();


export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
           <Routes />
        </Provider>
    );
  }
}
