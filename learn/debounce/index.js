let btn = document.querySelector("#btn");

function handle(e){
    console.log('%c [  ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', "22222", this, e);
}

btn.addEventListener("click", debounce(handle));

// function debounce(fn, delay = 1000){
//     let timer = null;
//     return function(e){
//         if(timer){
//             clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//             fn.call(this, e); // 改变this指向，默认setTimeout中的this会指向window
//         }, delay);
//     }
// }


function debounce(fn, delay = 1000){
    return function(e){
        setTimeout(function(){
            fn();
        }, delay);
    }
}