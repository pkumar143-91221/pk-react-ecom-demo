import { combineReducers } from "redux";
import { loaderReducer } from "./loader-reducer";
import { ProductsReducer, UserReducer } from "./user-reducer";

const RootReducer = combineReducers({
    loaderStatus: loaderReducer,
    user: UserReducer,
    productData: ProductsReducer
})

export default RootReducer;