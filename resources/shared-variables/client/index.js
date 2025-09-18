import * as alt from "alt-client";

let user_autheficated = false;

export const FRONTEND_URL = 'https://resources.void-rp.ru:3000';

export function userIsAuth() {
    return user_autheficated;
}

export function setUserAuthState(state) {
    user_autheficated = state;
}