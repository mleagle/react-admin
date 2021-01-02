import server from "../utils/request";

/**
 * 登录
 * 
 * @param {*} data 
 */
export function Login(data) {
    return server.request({
        url: '/login',
        method: 'post',
        data
    });
}