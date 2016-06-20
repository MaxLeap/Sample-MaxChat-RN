import {
    RECENT_GROUPS_MESSAGES_REQUEST_START,
    RECENT_GROUPS_MESSAGES_REQUEST_SUCCESS
} from "../constants";

export function recentGroupMessages() {
    return dispatch => {
        dispatch({
            type: RECENT_GROUPS_MESSAGES_REQUEST_START
        });
        global.im.listFriends(global.userId, (err, res)=> {
            if (err) {
                // alert('获取朋友列表失败');
            } else {
                dispatch({
                    type: RECENT_GROUPS_MESSAGES_REQUEST_SUCCESS,
                    res
                });


            }
        }, true)
    }
}

function recentGroupMessages() {
    global.im.getGroupChat(options.target, options.ts, options.limit, (err, res)=> {

    })
}