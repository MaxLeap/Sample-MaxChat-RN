import {
    SEND_MESSAGE_REQUEST_START,
    LIST_GROUP_MESSAGES_REQUEST_SUCCESS
} from "../constants";

export function sendGroupMessage(target, msg) {
    return dispatch => {
        msg = Object.assign(msg, {
            uniqueId: Math.round(Math.random() * 10000),
            name: global.userId
        });
        dispatch({
            type: SEND_MESSAGE_REQUEST_START,
            msg
        });
        global.im.toGroup(target).text(msg.text).ok();
    }
}

export function listGroupMessages(options = {}) {
    return dispatch => {
        im.getGroupChat(options.target, options.ts, options.limit, (err, res)=> {
            if (err) {
                alert('获取消息列表失败');
            } else {
                dispatch({
                    type: LIST_GROUP_MESSAGES_REQUEST_SUCCESS,
                    res
                });
            }
        });
    };
}