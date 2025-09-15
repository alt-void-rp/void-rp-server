import * as alt from "alt-client";

let user_autheficated = false;

export function userIsAuth() {
    return user_autheficated;
}

export function setUserAuthState(state) {
    user_autheficated = state;
}