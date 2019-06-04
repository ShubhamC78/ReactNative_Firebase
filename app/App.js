/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import Routes from './navigation/routes';
import configureStore from './store/appstore';
import { Provider } from 'react-redux';
import firebase from 'react-native-firebase';

import AsyncStorage from '@react-native-community/async-storage';
//This function intializes our store
const store = configureStore();


export default class App extends Component {

  async componentDidMount() {
    this.checkPermission();
  }

  //1
  async checkPermission() {
    firebase.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          this.getToken();
        } else {
          this.requestPermission();
        }
      });
  }

  //3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log("befor fcm token " + fcmToken);
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        console.log("after fcm token " + fcmToken)
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  //2
  async requestPermission() {
    firebase.messaging().requestPermission()
      .then(() => {
        this.getToken();
      })
      .catch(error => {
        console.log('permission rejected');
      });
  }



  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
