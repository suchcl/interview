let btn = document.querySelector("#btn");

function handle(e){
    console.log('%c [  ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', "333", this, e);
}

btn.addEventListener("click", debounce(handle));

function debounce(fn, delay = 1000){
    let timer = null;
    return function(e){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            // 显示指定this，e用来接收其他事件参数
            fn.call(this,e);
        },delay);
    }
}