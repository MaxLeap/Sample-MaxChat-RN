import {
    LIST_GROUPS_REQUEST_START,
    LIST_GROUPS_REQUEST_SUCCESS,
    ADD_GROUP_REQUEST_START,
    ADD_GROUP_REQUEST_SUCCESS
} from "../constants";

export function listGroups() {
    return dispatch => {
        dispatch({
            type: LIST_GROUPS_REQUEST_START
        });
        global.im.listGroups(global.userId, (err, res)=> {
            if (err) {
                alert('获取群组列表失败');
            } else {
                dispatch({
                    type: LIST_GROUPS_REQUEST_SUCCESS,
                    res
                });
            }
        }, true);
    }
}

export function addGroup(data) {
    return dispatch => {
        dispatch({
            type: ADD_GROUP_REQUEST_START
        });
        global.im.addGroup(data, (err, res)=> {
            if (err) {
                alert(err)
            } else {
                dispatch({
                    type: ADD_GROUP_REQUEST_SUCCESS,
                    res: {
                        id: res,
                        attributes: {
                            name: data.name
                        }
                    }
                });
                alert('添加成功');
            }
        })
    };
}