const token = "token";

/**
 * 设置Token
 * @param {*} value 
 */
export function setToken(value) {
    sessionStorage.setItem(token, value);
}

/**
 * 获取Token
 * @param {*} value 
 */
export function getToken(value) {
    return sessionStorage.getItem(token);
}