import { USER_LOGGEDIN, USER_LOGGEDOUT } from "./types";

export const userLogin = (user) => {
    let rt = {
        type: USER_LOGGEDIN,
        payload: {
            user
        }
    }
    console.log("Action data ::>", rt);
    return (rt);
}
    


export const userLogout = () => ({
    type: USER_LOGGEDOUT
});


export const addProductData = ({category, products}) => ({
    type: 'addProductData',
    payload: {
        category,
        products
    }
})