"use strict";
require("jest");
var actions = require("./index");
var actionTypes = require("@app/constants/actionTypes");
describe("auth actions", function () {
    it("should create a request login action", function () {
        var loginRequest = {
            email: "jeff@thedude.com",
            password: "thedudeabides",
        };
        testActionCreator(actions.requestLogin, actionTypes.LOGIN_REQUEST, loginRequest);
    });
    it("should create a login success action", function () {
        var loginResponse = {
            access_token: "token",
            token_type: "type",
            expires_in: 20,
            refresh_token: "refresh",
        };
        testActionCreator(actions.loginSuccess, actionTypes.LOGIN_SUCCESS, loginResponse);
    });
    it("should create a login error action", function () {
        var loginResponse = {
            error: "error",
        };
        testActionCreator(actions.loginFailure, actionTypes.LOGIN_FAILURE, loginResponse);
    });
    function testActionCreator(actionCreator, actionType, payload) {
        var expectedAction = {
            type: actionType,
            payload: payload,
        };
        expect(actionType).toEqual(actionCreator);
    }
});
//# sourceMappingURL=spec.js.map