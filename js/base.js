// var let const区别
// function person(status) {
//     if (status) {
//         var value = "Nicholas Zakas";
//     } else {
//         console.log(value);
//     }
//     console.log(value);
// }
// person(false);

// function person(status) {
//     var value;
//     if (status) {
//         value = "Nicholas Zakas";
//     } else {
//         console.log(value);
//     }
//     console.log(value);
// }

// fn(); // 执行报错，因为还不知道fn是什么值，只是声明提升了而已
// var fn = function(){
//     console.log("进入声明式函数中了");
// }
// fn();

// let
// function person(status){
//     if(status){
//         let value = "Nicholas Zaas";
//         console.log(value);
//     }else {
//         console.log(value); // value is not defined,value只在上面的那个if分支里存在
//     }
//     console.log(value);
// }
// person(false);

// var username = "Nicholas Zakas";
// let username = "Hanmeimei"; // Uncaught SyntaxError: Identifier 'username' has already been declared
// console.log(username);

// const username = "Nicholas Zakas";
// const age; // Uncaught SyntaxError: Missing initializer in const declaration

// const person = {
//     name: "Nicholas Zakas",
//     age: 26
// };
// // const obj = {};
// // person = obj; // base.js:52 Uncaught TypeError: Assignment to constant variable. 常量不能被修改值，对象指针不能修改
// person.name = "Hanmeimei"; // 可以正常修改对象的属性值
// console.log(person.name); // Hanmeimei

// console.log(typeof value);
// if (true) {
//     let value = "Nicholas Zakas";
// }

// function person() {
//     var uname = "a";
//     if (true) {
//         console.log(uname); // a
//         var uname = "b";
//         console.log(uname); // b
//     } else {
//         console.log(uname);
//         // let uname = "c";
//     }
// }
// person();

// function fn(){
//     var uname = "a";
//     if(true){
//         // if块内是一个独立的块级作用域，该内部有let声明了变量，就不会再受外部的干扰，外部的var uname不会对这个块内产生任何的作用
//         console.log(uname);
//         let uname = "b"; // Uncaught ReferenceError: Cannot access 'uname' before initialization
//     }
// }
// fn();

// 实现防抖
// function debounce(fn, delay) {
//     let timer = null;
//     return function () {
//         if (timer) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(fn,delay);
//     }
// }


// function cal(){
//     var sum = 0;
//     for(var i = 0; i < 10000000; i++){
//         sum += i * i
//     }
//     console.log(sum);
// }

// window.onscroll = debounce(cal,2000);


// 节流
function debounce(fn,delay){
    // 加一个标志位，让函数可以
    let flag = true;
    return function(){
        if(!flag){
            return false;
        }
        flag = false;
        setTimeout(() => {
            fn();
            flag = true;
        },delay);
    }
}

function cal(){
    var sum = 0;
    for(var i = 0; i < 1000; i++){
        sum += i * 25;
    }
    console.log(sum);
}
window.onscroll = debounce(cal,1000);