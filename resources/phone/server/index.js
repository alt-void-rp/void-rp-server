import * as alt from "alt-server";


alt.log('Resource [Phone] started');

alt.onClient('phone:upArrowPressed', () => {
    alt.logDebug('📱 Игрок нажал стрелку вверх на телефоне!');
});

