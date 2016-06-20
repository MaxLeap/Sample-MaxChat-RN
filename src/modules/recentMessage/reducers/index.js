import {Map} from "immutable";
import {RECENT_FRIENDS_MESSAGES_REQUEST_SUCCESS} from "../constants";

const initialState = Map({
    friends: [],
    groups: [],
    histories: [],
    segmentOptions: ['friends', 'groups'],
    segmentSelected: 'friends',
    friendCursor: 0
});

export default (state = initialState, action)=> {
    switch (action.type) {
        case RECENT_FRIENDS_MESSAGES_REQUEST_SUCCESS:
            let now = new Date().getTime();
            let array = [];
            action.res.map(f=> {
                if (f.recent && f.recent.content) {
                    let ts = f.recent.ts;
                    array.push(f);
                }
            });
            return state.setIn(['histories'], array);
        default:
            return state;
    }
}