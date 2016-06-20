import React, {Component} from "react";
import {
    View,
    ListView,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import {Actions} from "react-native-router-flux";
import styles from "../styles";

class Groups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }

    renderRow = (item)=> {
        return (
            <View>
                <TouchableOpacity onPress={()=>Actions.chat({target: item.id, isGroup: true})}>
                    <View style={styles.item}>
                        <Text>{item.attributes.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        let items = this.state.dataSource.cloneWithRows(this.props.groups);
        return (
            <ListView
                dataSource={items}
                renderRow={this.renderRow}
                enableEmptySections={true}
            />
        );
    }
}

export default Groups;