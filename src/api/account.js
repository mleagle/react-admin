import server from "../utils/request";

/**
 * 登录
 * 
 * @param {*} data 
 */
export function Login(data) {
    return server.request({
        url: '/login/',
        method: 'post',
        data
    });
}

/**
 * 获取验证码
 * 
 * @param {*} data 
 */
export function GetSms(data) {
    return server.request({
        url: '/getSms/',
        method: 'post',
        data
    });
}

/**
 * 登录
 * 
 * @param {*} data 
 */
export function Register(data) {
    return server.request({
        url: '/register/',
        method: 'post',
        data
    });
}