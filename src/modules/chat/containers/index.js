import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    Platform,
    Navigator,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Actions} from "react-native-router-flux";
import GiftedMessenger from "react-native-gifted-messenger";
import ExtraDimensions from "react-native-extra-dimensions-android";
import NavigationBar from "react-native-navbar";
import * as friendActions from "../actions/friends";
import * as groupActions from "../actions/groups";
import styles from "../styles";


let NavBarHeight;
let softMenuBarHeight;
if (Platform.OS === 'ios') {
    softMenuBarHeight = 0;
    NavBarHeight = Navigator.NavigationBar.Styles.General.NavBarHeight;
} else {
    softMenuBarHeight = ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT');
    NavBarHeight = 44;
}

class Chat extends Component {
    handleSend = (msg)=> {
        let {isGroup, target, sendFriendMessage, sendGroupMessage} = this.props;
        if (isGroup) {
            sendGroupMessage(target.id, msg);
        } else {
            sendFriendMessage(target.id, msg);
        }
    }
    componentDidMount = ()=> {
        let {isGroup, target, listFriendMessages, listGroupMessages, receiveMessage} = this.props;
        let options = {
            target: target.id,
            limit: 5,
            ts: new Date().getTime()
        }
        if (isGroup) {
            listGroupMessages(options);
        } else {
            listFriendMessages(options);
        }
        receiveMessage(isGroup);
    }

    render() {
        let {isGroup, target, sendFriendMessage, sendGroupMessage} = this.props;
        let attrs = target.attributes || {};
        let label = attrs.name || target.id;
        return (
            <View style={{
                flex: 1
            }} {...this.props}>
                <View>
                    <NavigationBar
                        style={styles.navigationBar}
                        title={{title: label, tintColor: '#ffffff'}}
                        leftButton={{title: '返回', handler: ()=>{Actions.pop()}, tintColor:'#ffffff'}}
                    />
                </View>
                <GiftedMessenger
                    autoFocus={false}
                    messages={this.props.messages}
                    maxHeight={Dimensions.get('window').height - NavBarHeight - softMenuBarHeight - 30}
                    handleSend={this.handleSend}
                    onImagePress={()=>Actions.pop()}
                    styles={{
                      bubbleRight: styles.bubbleRight
                    }}
                    placeholder={'输入消息'}
                />
            </View>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        messages: state.chat.get('messages')
    }
};

const mapDispatchToProps = (dispatch)=> {
    return bindActionCreators({...friendActions, ...groupActions}, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);