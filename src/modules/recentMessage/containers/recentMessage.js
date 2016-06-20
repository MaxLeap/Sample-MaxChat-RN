import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ListView
} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Actions} from "react-native-router-flux";
import NavigationBar from "react-native-navbar";
import * as friendsActions from "../actions/friends";
import * as groupsActions from "../actions/groups";
import styles from "../styles";

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }

    componentWillMount = ()=> {
        this.props.recentFriendsMessages();
    }

    renderRow = (item)=> {
        return (
            <View>
                <TouchableOpacity onPress={()=>Actions.chat({target: item, isGroup:false})}>
                    <View style={styles.item}>
                        <Text>{item.id}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        let {loaded, friends, groups, friendCursor, histories, recentFriendMessages} = this.props;
        let items = this.state.dataSource.cloneWithRows(histories);
        return (
            <View style={{flex:1}}>
                <View>
                    <NavigationBar
                        title={{title: '最近聊天', tintColor: '#ffffff'}}
                        style={styles.navigationBar}
                    />
                </View>
                <ListView
                    dataSource={items}
                    renderRow={this.renderRow}
                    enableEmptySections={true}
                />
            </View>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        histories: state.recentMessages.get('histories'),
        friends: state.recentMessages.get('friends'),
        groups: state.recentMessages.get('groups'),
        loaded: state.recentMessages.get('loaded'),
        friendCursor: state.recentMessages.get('friendCursor')
    }
};

const mapDispatchToProps = (dispatch)=> {
    return bindActionCreators({...friendsActions, ...groupsActions}, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contacts);