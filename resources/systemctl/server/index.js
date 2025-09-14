import * as alt from 'alt-server';
import * as chat from "chat";

alt.log(`Systemctl started`);

const ALLOWED_RESOURCES = [];

function resourceExists(name) {
    const resources = alt.Resource.all;
    return resources.some(res => res.name === name);
}

function isAllowed(name) {
    return ALLOWED_RESOURCES.length === 0 || ALLOWED_RESOURCES.includes(name);
}

alt.on('restartResource', (player, resourceName) => {
    if (player.id !== 0) {
        alt.log(`🔴 ${player.name} попытался перезагрузить ${resourceName}`);
        alt.send(player, 'notify', '❌ У вас нет прав!');
        return;
    }

    restartResourceSafely(player, resourceName);
});

function restartResourceSafely(player, resourceName) {
    if (!resourceName) {
        alt.log('❌ Не указано имя ресурса');
        alt.send(player, 'notify', '❌ Укажите имя ресурса');
        return;
    }

    if (!resourceExists(resourceName)) {
        alt.log(`❌ Ресурс "${resourceName}" не найден`);
        alt.send(player, 'notify', `❌ Ресурс "${resourceName}" не найден`);
        return;
    }

    if (!isAllowed(resourceName)) {
        alt.log(`❌ Ресурс "${resourceName}" запрещён к перезагрузке`);
        alt.send(player, 'notify', `❌ Нельзя перезагрузить "${resourceName}"`);
        return;
    }

    alt.restartResource(resourceName);
    alt.log(`🔄 Ресурс "${resourceName}" был перезагружен игроком ${player.name}`);
    alt.send(player, 'notify', `✅ "${resourceName}" перезагружен!`);
}




chat.registerCmd("systemctl", (player, args) => {
    if (args.length === 0) {
        chat.send(player, "Используй: /systemctl (resourceName)");
        return;
    }

    const commandName = args[0];
    const resourceName = args[1];

    if (!resourceName || !commandName) {
        chat.send(player, "Используй: /systemctl <command> (resourceName)");

        return;
    }

    if (!resourceExists(resourceName)) {
        chat.send(player, `Ресурс "${resourceName}" не существует`);

        return;
    }

    if (!isAllowed(resourceName)) {
        chat.send(player, `Ресурс "${resourceName}" нельзя перезагружать через RCON`);
        return;
    }

    if (resourceName == 'systemctl') {
        chat.send(player, "Ты не можешь перезапустить systemctl");
        return;
    }

    if (commandName == 'restart') {
        alt.restartResource(resourceName);
        chat.send(player, `Ресурс "${resourceName}" перезагружен`);
    }

    if (commandName == 'stop') {
        alt.stopResource(resourceName);
        alert.resou
        chat.send(player, `Ресурс "${resourceName}" остановлен`);
    }

    if (commandName == 'start') {
        alt.startResource(resourceName);
        chat.send(player, `Ресурс "${resourceName}" запущен`);
    }


});
