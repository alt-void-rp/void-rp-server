import * as alt from "alt-client";

const view = new alt.WebView("http://resource/client/html/index.html");


alt.on('playerConnect', (player) => {


    if (view.isReady) {
        alt.showCursor(true);
        alt.toggleGameControls(false);
        view.focus();
    }


    alt.logDebug(player.name);

});

alt.log(`Resource [auth] started`);
