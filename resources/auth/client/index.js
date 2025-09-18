import * as alt from "alt-client";
import * as shared_variables from 'alt:shared-variables'

const view = new alt.WebView(`${shared_variables.FRONTEND_URL}/auth`);

if (!shared_variables.userIsAuth()) {
    alt.toggleGameControls(false);
    alt.showCursor(true);
    view.focus();
}

function successAuthUser({ success }) {
    if (!success) return;

    view.unfocus();
    alt.toggleGameControls(true);
    alt.showCursor(false);
    view.isVisible = false;
}


alt.on('playerConnect', (player) => {

});


view.on('auth:loginUser', (jsonData) => {

    alt.emitServer('auth:loginUser', jsonData);
});


alt.onServer('auth:successAuthUser', successAuthUser);
alt.log(`Resource [auth] started`);
