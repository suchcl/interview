import axios from "axios";
const baseURL = "//api.ynotes.com";


const request = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

// 拦截器 请求拦截器
request.interceptors.request.use(
    // 请求参数的一些处理
    config => {
        // demo
        config.headers["token"] = "123456";
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// 拦截器 响应拦截器
// 参考链接:https://blog.csdn.net/qq_65597930/article/details/143807382
request.interceptors.response.use(
    // 响应数据的一些处理
    response => {
        return response;
    },
    err => {
        return Promise.reject(err);
    }
);

export default request;

