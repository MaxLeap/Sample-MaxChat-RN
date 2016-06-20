import React, {Component} from "react";
import {
    Actions,
    Scene,
    Router
} from "react-native-router-flux";
import Login from "./containers/login";
import Register from "./containers/register";

export default (
    <Scene key='user' direction="vertical">
        <Scene key='login'
               initial
               component={Login}
               title='login'
               rightTitle='Register'
               onRight={(e)=>Actions.register()}
        />
        <Scene key='register' component={Register} title='register'/>
    </Scene>
)