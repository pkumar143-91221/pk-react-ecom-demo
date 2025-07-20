import { HIDE_LOADER, SHOW_LOADER } from "../actions/types";

export const loaderReducer = (state = false, action) => {
    // console.log("Loader action ::>", action)
    switch(action.type) {
        case SHOW_LOADER:
            return action.payload.status;
        case HIDE_LOADER:
            return action.payload.status;
        default:
            return state;
    }
}