// 节流函数

const throttleBtn = document.querySelector("#throttle");

function handle(){
    console.log('%c [  ]-7', 'font-size:13px; background:pink; color:#bf2c9f;', "节流了", this)
}

throttleBtn.addEventListener("click",throttle(handle));

function throttle(fn, delay=3000){
    let time = Date.now();
    console.log('%c [ time ]-13', 'font-size:13px; background:pink; color:#bf2c9f;', time)
    return function(...args){
        let newTime = Date.now();
        if(newTime - time >= delay){
            fn.call(this,...args);
            time = Date.now();
        }
    }
}