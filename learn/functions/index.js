// 防抖函数
function debounce(fn, delay = 1000){
    let timer = null;
    return function(e){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.call(this,e);
        }, delay);
    }
}

// 调用demo
let btn = document.querySelector("#btn");

function handle(){
    console.log('%c [  ]-19', 'font-size:13px; background:pink; color:#bf2c9f;', "防抖函数")
}
btn.addEventListener("click", debounce(handle));