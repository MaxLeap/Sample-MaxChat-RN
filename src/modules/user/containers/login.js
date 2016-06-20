import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {
    View,
    StyleSheet
} from "react-native";
import * as MaxLogin from "maxlogin-react-native";
import {Actions} from "react-native-router-flux";
import * as UserActions from "../actions";
import styles from "../styles";

class Login extends Component {
    onSubmit = (data)=> {
        this.props.login(data);
    }

    render() {
        return (
            <View style={styles.container}>
                <MaxLogin.Login
                    onSubmit={this.onSubmit}
                    style={styles.account}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state}
};

const mapDispatchToProps = (dispatch)=> {
    return bindActionCreators(UserActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);