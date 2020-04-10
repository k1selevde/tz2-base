import {combineReducers} from "redux";
import sessionReducer from "./sessionReducer";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
    session: sessionReducer,
    news: newsReducer
});


type RootReducerType = typeof rootReducer // (globalstate: ..) => State
export type AppStateType = ReturnType<RootReducerType>


export default rootReducer;