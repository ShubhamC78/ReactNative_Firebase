
import React, { Component } from 'react';
import {Scene,Router,Stack,} from 'react-native-router-flux';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import SignUpView from '../components/Login/SignUpView';
import SplashScreen from '../components/SplashScreen/SplashScreen';


const Routes = () =>(
    <Router
    >
        <Stack key="customNavBar" hideTabBar titleStyle={{ alignSelf: 'center' }}>
            <Scene
                key="SplashScreen"
                component={SplashScreen}
                hideNavBar={true}
                gesturesEnabled={false}
            />
            <Scene
                key="Login"
                component={Login}
                hideNavBar={true}
                gesturesEnabled={false}
            />
            <Scene
                key="Home"
                component={Home}
                hideNavBar={true}
                gesturesEnabled={false}
            />
             <Scene
                key="SignUpView"
                component={SignUpView}
                hideNavBar={true}
                gesturesEnabled={false}
            />
        </Stack>
    </Router>
);

export default Routes