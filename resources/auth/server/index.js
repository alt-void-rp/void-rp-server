import * as alt from "alt-server";
import * as SHARED_VARIABLES from 'alt:shared-variables'

import { validUserAuth, validResetUserPassword } from './api.js'

alt.log('Resource [auth] started');
alt.log(`api-server: ${SHARED_VARIABLES.API_URL}`);


function successAuthUser(player, result) {
    alt.emitClient(player, 'auth:successAuthUser', result);
};

function failAuthUser(player, result) {
    alt.emitClient(player, 'auth:failAuthUser', result);
};

//

function successResetPasswordUser(player, result) {
    alt.emitClient(player, 'auth:successResetPasswordUserUser', result);
};

function failResetPasswordUserUser(player, result) {
    alt.emitClient(player, 'auth:failResetPasswordUserUser', result);
};


function loginUser(player, jsonData) {
    let data = JSON.parse(jsonData);
    data['id'] = player.id;

    let result = validUserAuth(data);

    if (result["success"] == true) successAuthUser(player, result);

    if (result["success"] == false && result["reason"] == 'password-login-novalid') failAuthUser(player, result);
}

function resetPasswordUser(player, jsonData) {
    let data = JSON.parse(jsonData);

    let result = validResetUserPassword(data);


    if (result["success"] == true) successResetPasswordUser(player, result);

    if (result["success"] == false && result["reason"] == 'password-reset-email-no-found') failResetPasswordUserUser(player, result);
}


alt.onClient('auth:loginUser', loginUser);
alt.onClient('auth:resetPasswordUser', resetPasswordUser)

