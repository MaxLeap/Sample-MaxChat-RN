import "maxleap-im";
import {Actions} from "react-native-router-flux";
import {USER_LOGIN_REQUEST_START} from "../constants";

function login(data) {
    return dispatch => {
        dispatch({
            type: USER_LOGIN_REQUEST_START
        });
        data = Object.assign({
            appId: '56b01ed8169e7d0001975c2a',
            clientId: 'WWxDbFIxblNIVGIwQmcxREhuUnFNUQ',
            region: 'cn'
        }, {
            username: data.username,
            password: data.password
        });
        global.im = ML.im(data, function (res) {
            if (res.success === true) {
                global.userId = res.id;
                Actions.maxChat();
            } else {
                console.log(res);
                alert('登录失败');
            }
        })
    }
}

export {
    login
}