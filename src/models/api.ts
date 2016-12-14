interface RequestLogin {
    email: string;
    password: string;
}

interface ResponseError {
    error: string;
}

interface ResponseAuth {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
}

export {
    RequestLogin,
    ResponseError,
    ResponseAuth
}
