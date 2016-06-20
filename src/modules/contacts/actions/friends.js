import {
    LIST_FRIENDS_REQUEST_START,
    LIST_FRIENDS_REQUEST_SUCCESS,
    ADD_FRIEND_REQUEST_START,
    ADD_FRIEND_REQUEST_SUCCESS,
    SET_ATTRIBUTE_REQUEST_START,
    SET_ATTRIBUTE_REQUEST_SUCCESS
} from "../constants";

export function listFriends() {
    return dispatch => {
        dispatch({
            type: LIST_FRIENDS_REQUEST_START
        });
        global.im.listFriends(global.userId, (err, res)=> {
            if (err) {
                alert('获取朋友列表失败');
            } else {
                dispatch({
                    type: LIST_FRIENDS_REQUEST_SUCCESS,
                    res
                });
            }
        }, true)
    }
}

export function addFriend(data = {}) {
    return dispatch => {
        dispatch({
            type: ADD_FRIEND_REQUEST_START
        });

        global.im.searchUsers(1, 0, 'id', data, (err, res)=> {
            if (err) {
                alert(err);
                return;
            } else if (!res[0]) {
                alert('用户不存在');
                return;
            }
            global.im.addFriend(global.userId, res[0].id, (err, res)=> {
                if (err) {
                    alert(err);
                } else {

                    console.log("添加");
                    console.log(res);

                    dispatch({
                        type: ADD_FRIEND_REQUEST_SUCCESS,
                        res: {
                            ...res,
                            attributes: {
                                name: data.name
                            }
                        }
                    });
                    alert('添加成功');
                }
            });

        });
    }
}

export function setAttributes(data = {}) {
    return dispatch => {
        dispatch({
            type: SET_ATTRIBUTE_REQUEST_START
        });
        global.im.setUserAttributes(global.userId, data, (error, value) => {
            dispatch({
                type: SET_ATTRIBUTE_REQUEST_SUCCESS
            });
        });
    }
}