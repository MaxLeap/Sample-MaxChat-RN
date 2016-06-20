import {
    createStore,
    applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import moduleReducers from "./reducers";

export default configureStore = (initialState)=> {
    return createStore(moduleReducers, initialState, applyMiddleware(thunk));
}
