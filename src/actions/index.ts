import { loginSuccess, loginFailure, requestLogin, AuthAction } from "./auth";

type Action = AuthAction;

export {
    // Action creators
    requestLogin,
    loginSuccess,
    loginFailure,

    Action,
};
