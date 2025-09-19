
const USER_LOGIN_EXAMPLE =
{
    "username": 'admin',
    "password": 'admin',
    "id": ''
}

const USER_DATA_MODEL =
{
    "email": '1111111111aleksey46@gmail.com',
    "username": 'mironoouv',
    "password": 'miron',

    "socialID": '',

}

const USER_RESET_PASSWORD =
{
    "email": 'miron@gmail.com',
    "otp_code": 'admin',
}


export function validUserAuth(data) {
    let result = {};
    let userAuth = Boolean();

    userAuth = (data['username'] == USER_LOGIN_EXAMPLE['username'] &&
        data['password'] == USER_LOGIN_EXAMPLE['password']);

    if (!userAuth) {
        result["success"] = false;
        result["reason"] = 'password-login-novalid';
        result["message"] = 'Неправильный логин или пароль.';
    };

    if (userAuth) {
        result["success"] = true;
        result["access_token"] = 'a4536ssd114323sahj21213bh435h342h1';
    };


    return result;
}

export function validResetUserPassword(data) {
    let result = {};
    let userResetpassord = Boolean();

    userResetpassord = (data['email'] == USER_RESET_PASSWORD['email']);

    if (!userResetpassord) {
        result["success"] = false;
        result["reason"] = 'password-reset-email-no-found';
        result["message"] = 'Пользователя с такой почтой не существует!';
    };

    if (userResetpassord) {
        result["success"] = true;
        result["email"] = data['email'];
    };

    return result;
}