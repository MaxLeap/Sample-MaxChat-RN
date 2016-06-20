import React, {Component} from "react";
import {
    View,
    ListView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import {Actions} from "react-native-router-flux";
import styles from "../styles";

class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }

    renderRow = (item)=> {
        let attrs = item.attributes || {};
        let label = attrs.name || item.id;
        return (
            <View>
                <TouchableOpacity onPress={()=>Actions.chat({target: item, isGroup:false})}>
                    <View style={styles.item}>
                        <Text>{label}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        let items = this.state.dataSource.cloneWithRows(this.props.friends);
        return (
            <ListView
                dataSource={items}
                renderRow={this.renderRow}
                enableEmptySections={true}
            />
        );
    }
}

export default Friends;
