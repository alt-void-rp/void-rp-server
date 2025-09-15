import * as alt from "alt-server";
import * as SHARED_VARIABLES from 'alt:shared-variables'

alt.log('Resource [auth] started');
alt.log(`api-server: ${SHARED_VARIABLES.API_ALTV_LOCAL}`);

alt.on('playerConnect', handleConnect);
alt.onClient('auth:loginUser', loginUser);

function handleConnect(player) {
}

function loginUser(player, jsonData) {
    alt.log(jsonData);
}