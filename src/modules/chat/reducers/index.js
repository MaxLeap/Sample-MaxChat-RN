import {Map} from "immutable";
import {
    SEND_MESSAGE_REQUEST_START,
    LIST_GROUP_MESSAGES_REQUEST_SUCCESS,
    LIST_FRIEND_MESSAGES_REQUEST_SUCCESS,
    RECEIVE_MESSAGE_SUCCESS
} from "../constants";

const initialState = Map({
    messages: []
});

export default (state = initialState, action)=> {
    switch (action.type) {
        case SEND_MESSAGE_REQUEST_START:
            return state.updateIn(['messages'], messages=> {
                return [...messages, action.msg]
            });
        case LIST_FRIEND_MESSAGES_REQUEST_SUCCESS:
            return state.setIn(['messages'], action.res.map(msg=> {
                return mapMessage(msg, global.userId);
            }));
        case LIST_GROUP_MESSAGES_REQUEST_SUCCESS:
            return state.setIn(['messages'], action.res.map(msg=> {
                return mapMessage(msg, global.userId);
            }));
        case RECEIVE_MESSAGE_SUCCESS:
            return state.updateIn(['messages'], messages=> {
                return [...messages, mapMessage(action.res, global.userId)];
            });
        default:
            return state;
    }
}

function mapMessage(msg, id) {
    var self = true;
    var name = '我';
    if (msg.from) {
        self = false;
        name = msg.from.id;
    } else if (msg.speaker) {
        if (msg.speaker != id) {
            self = false;
        }
        name = msg.speaker;
    }
    // var image = {uri: 'https://facebook.github.io/react/img/logo_og.png'};
    // return {
    //     text: msg.content.body,
    //     name: name,
    //     position: self ? 'right' : 'left',
    //     uniqueId: msg.ts,
    //     date: new Date(msg.ts),
    //     image
    // };
    return {
        text: msg.content.body,
        position: self ? 'right' : 'left',
        uniqueId: msg.ts,
        date: new Date(msg.ts)
    };
}