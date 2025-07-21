import { USER_LOGGEDIN, USER_LOGGEDOUT } from "../actions/types";

export const UserReducer = (state = {}, action) => {
    // cons
    switch(action.type) {
        case USER_LOGGEDIN:
            return {...state, ...action.payload};
        case USER_LOGGEDOUT:
            return null;
        default:
            return state;
    }
}

export const ProductsReducer = (state = {}, action) => {
    switch(action.type) {
        case 'addProductData':
            return action.payload;
        default:
            return state;
    }
}