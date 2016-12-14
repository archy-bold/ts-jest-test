import { ResponseAuth } from "./api";

interface GlobalState {
    auth: AuthState;
}

interface AuthState {
    access_token: string;
    authenticated: boolean;
}

export {
    GlobalState,
    AuthState,
};
