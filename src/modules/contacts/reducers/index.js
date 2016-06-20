import {Map} from "immutable";
import {
    LIST_FRIENDS_REQUEST_SUCCESS,
    LIST_GROUPS_REQUEST_SUCCESS,
    ADD_FRIEND_REQUEST_SUCCESS,
    ADD_GROUP_REQUEST_SUCCESS
} from "../constants";

const initialState = Map({
    friends: [],
    groups: [],
    segmentOptions: ['friends', 'groups'],
    segmentSelected: 'friends'
});

export default (state = initialState, action)=> {
    switch (action.type) {
        case LIST_FRIENDS_REQUEST_SUCCESS:
            return state.setIn(['friends'], action.res);
        case LIST_GROUPS_REQUEST_SUCCESS:
            return state.setIn(['groups'], action.res);
        case ADD_FRIEND_REQUEST_SUCCESS:
            return state.updateIn(['friends'], friends=> {
                return [...friends, action.res];
            });
        case ADD_GROUP_REQUEST_SUCCESS:
            return state.updateIn(['groups'], groups=> {
                return [...groups, action.res];
            });
        default:
            return state;
    }
}