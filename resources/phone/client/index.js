import * as alt from "alt-client";
import * as chat from "chat";
import * as shared_variables from 'alt:shared-variables';


const view = new alt.WebView("http://resource/client/html/index.html");

alt.on('keyup', (key) => {
    if (key === alt.KeyCode.Up && !chat.chatIsOpened()) {
        if (!shared_variables.userIsAuth()) return;

        alt.emitServer('phone:upArrowPressed');
        view.emit("openPhone");
        alt.showCursor(true);
        alt.toggleGameControls(false);
        view.focus();
    }

    if (key === alt.KeyCode.Down) {
        if (!shared_variables.userIsAuth()) return;

        alt.emitServer('phone:downArrowPressed');
        view.emit("closePhone");
        alt.showCursor(false);
        alt.toggleGameControls(true);
        view.unfocus();

    }
});

view.on('clickContactsApp', (message) => {
    alt.log(message);
});