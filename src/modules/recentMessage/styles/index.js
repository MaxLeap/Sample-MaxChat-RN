'use strict';

import {StyleSheet} from "react-native";

let primaryColor = '#29ae60';

let styles = {
    navigationBar: {
        backgroundColor: primaryColor
    },
    item: {
        flex: 1,
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#808080'
    }
};

export default styles;