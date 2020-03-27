import {combineReducers} from "redux";
import sessionReducer from "./sessionReducer";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
    session: sessionReducer,
    news: newsReducer
});

export default rootReducer;