import React, {Component} from "react";
import {
    AppRegistry,
    Navigator,
    View,
    Text
} from "react-native";
import {Provider} from "react-redux";
import configureStore from "./configureStore";
import initialState from "./initialState";
import MaxLeap from "maxleap-react-native";
import Routes from "./routes";

export default main = ()=> {
    MaxLeap.useCNServer();

    const store = configureStore(initialState);

    class DemoIMReactNative extends Component {
        render() {
            return (
                <Provider store={store}>
                    <Routes />
                </Provider>
            );
        }
    }
    AppRegistry.registerComponent('DemoIMReactNative', () => DemoIMReactNative);
}