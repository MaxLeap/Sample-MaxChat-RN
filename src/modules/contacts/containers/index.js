import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    AlertIOS,
    Platform
} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Actions} from "react-native-router-flux";
import ScrollableTabView from "react-native-scrollable-tab-view";
import NavigationBar from "react-native-navbar";
import DialogAndroid from "react-native-dialogs";
import * as friendsActions from "../actions/friends";
import * as groupsActions from "../actions/groups";
import Friends from "./friends";
import Groups from "./groups";
import styles from "../styles";

class Contacts extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount = ()=> {
        let {listFriends, listGroups, setAttributes} = this.props;
        listFriends();
        listGroups();
        let name = global.im.cache.options.username;
        if (name) {
            setAttributes({
                name
            });
        }
    }

    onSelection = ()=> {

    }

    promptAddGroup = (target)=> {
        this.props.addGroup({
            owner: userId,
            name: target
        });
    }

    promptAddFriend = (target)=> {
        this.props.addFriend({name: target});
    }

    promptAdd = (type)=> {
        let title;
        let handler;
        if (type === 'friends') {
            title = '好友姓名';
            handler = this.promptAddFriend;
        } else {
            title = '群组名';
            handler = this.promptAddGroup;
        }
        if (Platform.OS === 'ios') {
            AlertIOS.prompt(
                title,
                null,
                [
                    {
                        text: '取消', null
                    },
                    {text: '确定', onPress: handler}
                ]
            )
        } else {
            let dialog = new DialogAndroid();
            dialog.set({
                title: title,
                positiveText: '确定',
                negativeText: '取消',
                input: {
                    callback: handler
                }
            });
            dialog.show();
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View>
                    <NavigationBar
                        style={styles.navigationBar}
                        leftButton={{title: '添加好友', tintColor:'#ffffff', handler: this.promptAdd.bind(this, 'friends')}}
                        rightButton={{title: '创建群组', tintColor:'#ffffff', handler: this.promptAdd.bind(this, 'groups')}}
                    />
                </View>
                <ScrollableTabView {...styles.tabBar}>
                    <Friends tabLabel='好友' {...this.props} />
                    <Groups tabLabel='群组'  {...this.props}/>
                </ScrollableTabView>
            </View>

        );
    }
}

const mapStateToProps = (state)=> {
    return {
        segmentOptions: state.contacts.get('segmentOptions'),
        segmentSelected: state.contacts.get('segmentSelected'),
        friends: state.contacts.get('friends'),
        groups: state.contacts.get('groups')
    }
};

const mapDispatchToProps = (dispatch)=> {
    return bindActionCreators({...friendsActions, ...groupsActions}, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contacts);