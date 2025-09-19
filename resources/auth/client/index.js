import * as alt from "alt-client";
import * as shared_variables from 'alt:shared-variables'

const view = new alt.WebView(`${shared_variables.FRONTEND_URL}/auth`);

if (!shared_variables.userIsAuth()) {
    alt.toggleGameControls(false);
    alt.showCursor(true);
    view.focus();
}

function successAuthUser(data) {
    if (!data["success"]) return;

    view.unfocus();
    alt.showCursor(false);
    alt.toggleGameControls(true);
    view.isVisible = false;
}

function failAuthUser(data) {
    view.emit("auth:failAuthUser", data);
}

//

function successResetPasswordUser(data) {
    if (!data["success"]) return;
    view.emit("auth:successResetPasswordUserUser", data);
}

function failResetPasswordUserUser(data) {
    view.emit("auth:failResetPasswordUserUser", data);
}

//


view.on('auth:loginUser', (jsonData) => alt.emitServer('auth:loginUser', jsonData));
view.on('auth:resetPasswordUser', (jsonData) => alt.emitServer('auth:resetPasswordUser', jsonData));

// auth
alt.onServer('auth:successAuthUser', successAuthUser);
alt.onServer('auth:failAuthUser', failAuthUser);
// reset password for email
alt.onServer('auth:successResetPasswordUserUser', successResetPasswordUser);
alt.onServer('auth:failResetPasswordUserUser', failResetPasswordUserUser);

alt.log(`Resource [auth] started`);
