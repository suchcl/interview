// 防抖函数
function debounce(fn, delay = 1000) {
    let timer = null;
    return function (e) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.call(this, e);
        }, delay);
    }
}

// 调用demo
let btn = document.querySelector("#btn");

function handle() {
    console.log('%c [  ]-19', 'font-size:13px; background:pink; color:#bf2c9f;', "防抖函数")
}
// btn.addEventListener("click", debounce(handle));

// 获取URL参数,并以对象的形式返回
const url = "https://example.com/page?param1=value1&param2=value2";
function getUrlParams(url) {
    const params = {};
    const queryString = url.split("?")[1];
    if (!queryString) {
        return params;
    }
    const tempParams = queryString.split("&");
    for (let i = 0; i < tempParams.length; i++) {
        const item = tempParams[i].split("=");
        const key = decodeURIComponent(item[0]);
        const value = decodeURIComponent(item[1]);
        params[key] = value;
    }
    return params;
}
getUrlParams(url)
console.log('%c [ getUrlParams(url) ]-40', 'font-size:13px; background:pink; color:#bf2c9f;', getUrlParams(url))