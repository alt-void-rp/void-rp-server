import * as alt from "alt-client";
import * as chat from "chat";

const view = new alt.WebView("http://resource/client/html/index.html");

alt.on('keyup', (key) => {
    if (key === alt.KeyCode.Up && !chat.chatIsOpened()) {

        alt.emitServer('phone:upArrowPressed');
        view.emit("openPhone");
        alt.showCursor(true);
        alt.toggleGameControls(false);
        view.focus();
    }

    if (key === alt.KeyCode.Down) {
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