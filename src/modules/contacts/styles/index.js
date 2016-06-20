'use strict';

import {StyleSheet} from "react-native";

let primaryColor = '#29ae60';
let accentColor = '#FF4081';

let styles = {
    item: {
        flex: 1,
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#808080'
    },
    navigationBar: {
        backgroundColor: primaryColor
    },
    tabBar: {
        tabBarBackgroundColor: primaryColor,
        tabBarInactiveTextColor: '#ffffff',
        tabBarUnderlineColor: accentColor,
        tabBarActiveTextColor: accentColor
    }
};

export default styles;