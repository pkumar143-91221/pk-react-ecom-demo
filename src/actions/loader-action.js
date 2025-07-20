import { HIDE_LOADER, SHOW_LOADER } from "./types";

export const showLoader = (status) => ({
    type: SHOW_LOADER,
    payload: {
        status
    }
});

export const hideLoader = (status) => ({
    type: HIDE_LOADER,
    payload: {
        status
    }
});
