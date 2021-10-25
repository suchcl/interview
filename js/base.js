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

console.log(typeof value);
if (true) {
    let value = "Nicholas Zakas";
}