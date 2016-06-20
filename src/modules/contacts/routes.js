import React, {Component} from "react";
import {
    Actions,
    Scene,
    Router
} from "react-native-router-flux";
import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";
import Contacts from "./containers/index";

class TabIcon extends Component {
    render() {
        return (
            <Text style={{color: '#29ae60'}}>
                联系人
            </Text>
        );
    }
}

export default (
    <Scene key='contacts' icon={TabIcon} component={Contacts} hideNavBar={true}/>
)