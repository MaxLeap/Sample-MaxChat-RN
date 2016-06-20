import {
    RECENT_FRIENDS_MESSAGES_REQUEST_START,
    RECENT_FRIENDS_MESSAGES_REQUEST_SUCCESS
} from "../constants";

export function recentFriendsMessages() {
    return dispatch => {
        dispatch({
            type: RECENT_FRIENDS_MESSAGES_REQUEST_START
        });
        global.im.listFriends(global.userId, (err, res)=> {
            if (err) {
                alert('获取朋友列表失败');
            } else {
                dispatch({
                    type: RECENT_FRIENDS_MESSAGES_REQUEST_SUCCESS,
                    res
                });
            }
        }, true)
    }
}