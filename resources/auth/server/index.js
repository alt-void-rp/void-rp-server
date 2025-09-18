import * as alt from "alt-server";
import * as SHARED_VARIABLES from 'alt:shared-variables'

import { validUserAuth } from './api.js'

alt.log('Resource [auth] started');
alt.log(`api-server: ${SHARED_VARIABLES.API_URL}`);


function successAuthUser(player, result) {
    alt.emitClient(player, 'auth:successAuthUser', result);
};

function failAuthUser(player, result) {
    alt.emitClient(player, 'auth:failAuthUser', result);
};

function loginUser(player, jsonData) {
    let data = JSON.parse(jsonData);
    data['id'] = player.id;

    let result = validUserAuth(data);

    if (result["success"] == true) successAuthUser(player, result);

    if (result["success"] == false && result["reason"] == 'password-login-novalid') failAuthUser(player, result);
}


alt.onClient('auth:loginUser', loginUser);

