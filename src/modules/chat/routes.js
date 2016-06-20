import React, {Component} from 'react';
import {
    Actions,
    Scene,
    Router
} from 'react-native-router-flux';
import ReactNative, {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import Chat from './containers/index';

export default (
    <Scene key='chat' component={Chat} hideNavBar={true}/>
)