import * as alt from "alt-client";
import * as shared_variables from 'alt:shared-variables'

const view = new alt.WebView(`${shared_variables.FRONTEND_URL}/auth`);

if (!shared_variables.userIsAuth()) {
    alt.toggleGameControls(false);
    alt.showCursor(true);
    view.focus();
}

/**
 * @param {object} data - The data returned from the server.
 * @returns {void}
 */
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

/** 
 * @param {alt.IPlayer} player - The player that connected.
 */
alt.on('playerConnect', (player) => {
});


/**
 * @param {string} jsonData 
 */
view.on('auth:loginUser', (jsonData) => {
    alt.emitServer('auth:loginUser', jsonData);
});


/**
 * @param {object} data - The data returned from the server.
 */
alt.onServer('auth:successAuthUser', successAuthUser);
alt.onServer('auth:failAuthUser', failAuthUser);

alt.log(`Resource [auth] started`);
