import * as alt from "alt-client";
import * as shared_variables from 'alt:shared-variables'


const view = new alt.WebView("http://resource/client/html/index.html");

if (view.isReady && !shared_variables.userIsAuth()) {
    alt.toggleGameControls(false);
    view.focus();
    alt.showCursor(true);
}

alt.on('playerConnect', (player) => {

    alt.logDebug(player.name);

});

view.on('auth:loginUser', (jsonData) => alt.emitServer('auth:loginUser', jsonData));

alt.log(`Resource [auth] started`);
