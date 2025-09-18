
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