import { combineReducers } from "redux";
import { loaderReducer } from "./loader-reducer";

const RootReducer = combineReducers({
    loaderStatus: loaderReducer
})

export default RootReducer;