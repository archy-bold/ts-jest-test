import "jest";
import * as actions from "./index";
import { Action } from "./index";
import * as actionTypes from "@app/constants/actionTypes";
import { RequestLogin, ResponseError, ResponseAuth } from "@app/models/api";

describe("auth actions", () => {
    it("should create a request login action", () => {
        const loginRequest: RequestLogin = {
            email: "jeff@thedude.com",
            password: "thedudeabides",
        };

        testActionCreator(actions.requestLogin, actionTypes.LOGIN_REQUEST,
            loginRequest);
    });

    it("should create a login success action", () => {
        const loginResponse: ResponseAuth = {
            access_token: "token",
            token_type: "type",
            expires_in: 20,
            refresh_token: "refresh",
        };

        testActionCreator(actions.loginSuccess, actionTypes.LOGIN_SUCCESS,
            loginResponse);
    });

    it("should create a login error action", () => {
        const loginResponse: ResponseError = {
            error: "error",
        };

        testActionCreator(actions.loginFailure, actionTypes.LOGIN_FAILURE,
            loginResponse);
    });

    function testActionCreator(actionCreator: string, actionType: string,
        payload: any): void {

        const expectedAction: Action<any> = {
            type: actionType,
            payload: payload,
        };

        expect(actionType).toEqual(actionCreator);
    }
});
