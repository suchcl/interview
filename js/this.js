// 1. 输出结果
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve();
//   console.log(2);
// });
// promise.then(() => {
//   console.log(3);
// });

// console.log(4);

// 输出结果：1、2、4、3

// 2. 输出结果
// var length = 10;
// function fn() {
//   console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function (fn) {
//     fn();
//     arguments[0]();
//   },
// };
// obj.method(fn, 1); // 10、2

// var x = "1";
// var person = {
//   x: "2",
//   pro: {
//     x: "3",
//     getName: function () {
//       console.log(this);
//       return this.x;
//     },
//   },
// };

// console.log(person.pro.getName()); // 3

// var people = person.pro.getName;
// console.log(people()); // 1

// 3. 输出结果
// var x = "1";
// var person = {
//   x: "2",
//   getName: function () {
//     return function () {
//       console.log(this); // window
//       return this.x;
//     };
//   },
// };
// console.log(person.getName()()); // 1

// console.log(a); //undefined
// console.log(b()); // TypeError: b is not a function
// console.log(c()); // 没有执行到，没有输出；如果b()可以正常执行，则本行输出3
// var a = 1;
// var b = function () {
//   return 2;
// };
// function c() {
//   return 3;
// }

// var x = 1;
// function test() {
//   x = 2;
//   let x = 3;
//   console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization
// }
// test();

// 手动实现一个bind方法
/**
 * 手动实现一个bind
 * bind介绍：什么是bind
 */
/**
 * 算法题
 * 爬楼梯，楼梯有n阶，每次可以爬1或2各台阶，有多少种爬法可以爬到楼顶   n是整数
 */
