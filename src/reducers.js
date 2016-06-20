import {combineReducers} from "redux";
import {reducers as maxLoginReducers} from "maxlogin-react-native";
import user from "./modules/user/reducers";
import contacts from "./modules/contacts/reducers";
import recentMessages from "./modules/recentMessage/reducers";
import chat from "./modules/chat/reducers";

const rootReducer = combineReducers({
    ...maxLoginReducers,
    user,
    contacts,
    chat,
    recentMessages
});

export default rootReducer;