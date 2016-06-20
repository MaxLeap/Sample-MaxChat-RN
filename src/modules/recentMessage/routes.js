import React, {Component} from "react";
import {
    Actions,
    Scene,
    Router
} from "react-native-router-flux";
import recentMessage from "./containers/recentMessage";
import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";

class TabIcon extends Component {
    render() {
        return (
            <Text style={{color: '#29ae60'}}>
                最近聊天
            </Text>
        );
    }
}

export default (
    <Scene component={recentMessage} key='recentMessage' icon={TabIcon} hideNavBar={true}/>
)