import * as alt from "alt-server";
import * as SHARED_VARIABLES from 'shared-variables'

alt.log('Resource [auth] started');
alt.log(`api-server: ${SHARED_VARIABLES.API_ALTV_LOCAL}`);

alt.on('playerConnect', handleConnect);

function handleConnect(player) {
}