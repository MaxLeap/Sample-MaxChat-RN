import {
    SEND_MESSAGE_REQUEST_START,
    RECEIVE_MESSAGE_SUCCESS,
    LIST_FRIEND_MESSAGES_REQUEST_START,
    LIST_FRIEND_MESSAGES_REQUEST_SUCCESS
} from "../constants";

export function sendFriendMessage(target, msg) {
    return dispatch => {
        msg = Object.assign(msg, {
            uniqueId: Math.round(Math.random() * 10000),
            name: global.userId
        });
        // msg = Object.assign(msg, {
        //     image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
        //     uniqueId: Math.round(Math.random() * 10000),
        //     name: global.userId
        // });
        dispatch({
            type: SEND_MESSAGE_REQUEST_START,
            msg
        });
        global.im.toFriend(target).text(msg.text).ok();
    }
}

export function receiveMessage() {
    return dispatch => {
        global.im.onMessage(res=> {
            dispatch({
                type: RECEIVE_MESSAGE_SUCCESS,
                res
            });
        });
        global.im.yourself(res=> {
            dispatch({
                type: RECEIVE_MESSAGE_SUCCESS,
                res
            });
        });
    };
}

export function listFriendMessages(options = {}) {
    return dispatch => {
        dispatch({
            type: LIST_FRIEND_MESSAGES_REQUEST_START
        });
        global.im.getRecentChat(global.userId, options.target, options.ts, options.limit, (err, res)=> {
            if (err) {
                alert('获取消息列表失败');
            } else {
                dispatch({
                    type: LIST_FRIEND_MESSAGES_REQUEST_SUCCESS,
                    res
                });
            }
        });
    }
}