import axios from "axios";

// 第一步：实例化
const server = axios.create({
    baseURL: process.env.REACT_APP_ENV,
    timeout: 1000
});

// 第二步：添加请求拦截器
server.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 第三步：添加响应拦截器
server.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default server;