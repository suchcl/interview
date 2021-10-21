// function a() {
//   b();
//   console.log("a");
// }

// function b() {
//   console.log("b");
// }
// a(); // b,a

// function a() {
//   b();
//   console.log("a");
// }
// function b() {
//   console.log("b");
//   setTimeout(function () {
//     console.log("c");
//   }, 2000);
// }
// a();

// 按钮点击事件
// var btn = document.getElementById("btn");
// btn.addEventListener("click", function timer() {
//   setTimeout(function () {
//     console.log("点击了按钮");
//   }, 2000);
// });

// console.log("Hi");

// setTimeout(function timeout() {
//   console.log("来点击按钮");
// }, 5000);
// console.log("欢迎你!");

// setTimeout((_) => {
//   console.log(4);
// });

// new Promise((resolve) => {
//   resolve();
//   console.log(1);
// }).then((_) => {
//   console.log(3);
// });

// 1
// console.log(2);

// setTimeout(function () {
//   console.log(1);
// });

// new Promise(function (resolve, reject) {
//   console.log(2);
//   resolve(3);
// }).then(function (val) {
//   console.log(val);
// });
// // 执行结果：2,3,1

// 2
// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 0);

// const intervarId = setInterval(function () {
//   console.log(3);
// }, 0);

// setTimeout(function () {
//   console.log(10);
//   new Promise(function (resolve) {
//     console.log(11);
//     resolve();
//   })
//     .then(function () {
//       console.log(12);
//     })
//     .then(function () {
//       console.log(13);
//       clearInterval(intervarId);
//     });
// }, 0);

// Promise.resolve()
//   .then(function () {
//     console.log(7);
//   })
//   .then(function () {
//     console.log(8);
//   });
// console.log(9);
// //1  9 7  8  2  3  10  11  12   13

// 3
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }

// async function async2() {
//   console.log("async2");
// }

// async1();

// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });
// console.log("script end");
//async1 start、async2、promise1、script end、async1 end、promise2

// 4
// const s = new Date().getSeconds();

// setTimeout(function () {
//   console.log("Ran after " + (new Date().getSeconds() - s) + "seconds");
// }, 500);

// while (true) {
//   if (new Date().getSeconds() - s >= 2) {
//     console.log("Good,looped for 2 seconds");
//     break;
//   }
// }
// // Good,looped for 2 seconds、Ran after 2seconds

// 5
// setTimeout(() => {
//   console.log(1);
// }, 20);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// setTimeout(() => {
//   console.log(3);
// }, 10);

// setTimeout(() => {
//   console.log(5);
// }, 10);

// console.log(4);

// // 4  2  3   5  1

// 6
// setTimeout(() => {
//   console.log(1);
// }, 20);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// setTimeout(() => {
//   console.log(3);
// }, 30);
// console.log(4);
// // 4  2  1  3

// 7
// console.log(1);
// new Promise((resolve, reject) => {
//   console.log(2);
//   resolve();
// }).then((res) => {
//   console.log(3);
// });
// console.log(4);
// // 1  2  4  3

// 8
// setTimeout(function () {
//   console.log(1);
// }, 0);

// new Promise(function (resolve, reject) {
//   console.log(2);
//   resolve();
// })
//   .then(function () {
//     console.log(3);
//   })
//   .then(function () {
//     console.log(4);
//   });
// console.log(6);
// // 2 6 3 4 1

// 9
// setTimeout(function () {
//   console.log(1);
// }, 0);
// new Promise(function (resolve, reject) {
//   console.log(2);
//   for (var i = 0; i < 10000; i++) {
//     if (i === 10) {
//       console.log(10);
//     }
//     i == 9999 && resolve();
//   }
//   console.log(3);
// }).then(function () {
//   console.log(4);
// });
// console.log(5);
// //2  10  3  5  4  1

// 10
// console.log("start");
// setTimeout(() => {
//   console.log("children2");
//   Promise.resolve().then(() => {
//     console.log("children3");
//   });
// }, 0);

// new Promise(function (resolve, reject) {
//   console.log("children4");
//   setTimeout(function () {
//     console.log("children5");
//     resolve("children6");
//   }, 0);
// }).then((res) => {
//   console.log("children7");
//   setTimeout(() => {
//     console.log(res);
//   }, 0);
// });
// //start、children4、children2、children3、children5、children7、children6

// 11
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }

// async function async2() {
//   console.log("async2");
// }
// console.log("script start");
// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);
// async1();
// new Promise((resolve) => {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });
// console.log("script end");
// //script start、async1 start、async2、promise1、script end、async1 end、promise2、setTimeout

// 12
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }

// async function async2() {
//   new Promise(function (resolve) {
//     console.log("promise1");
//     resolve();
//   }).then(function () {
//     console.log("promise2");
//   });
// }
// console.log("script start");

// // 第一个宏任务
// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);
// async1();

// new Promise(function (resolve) {
//   console.log("promise3");
//   resolve();
// }).then(function () {
//   console.log("promise4");
// });
// console.log("script end");
// script start、async1 start、promise1、promise3、script end、promise2、async1 end、promise4、setTimeout

// 13
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   setTimeout(function () {
//     console.log("settimeout1");
//   }, 0);
// }

// async function async2() {
//   setTimeout(function () {
//     console.log("settimeout2");
//   }, 0);
// }

// console.log("script start");

// setTimeout(function () {
//   console.log("setTimeout3");
// }, 0);

// async1();

// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });

// console.log("script end");
//script start、async1 start、promise1、script end、promise2、settimeout3、settimeout2、settimeout1

// 14
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }

// async function async1() {
//   console.log("async1 start");
//   Promise.resolve(async2()).then(function () {
//     console.log("async1 end");
//   });
// }

// 15
// async function a1() {
//   console.log("a1 start");
//   await a2();
//   console.log("a1 end");
// }

// // async function a1() {
// //   console.log("a1 start");
// //   Promise.resolve(a2()).then(() => {
// //     console.log("a1 end");
// //   });
// // }

// async function a2() {
//   console.log("a2");
// }

// console.log("script start");

// // 第一个宏任务，被挂起
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("promise1");
// });

// a1();

// let promise2 = new Promise((resolve) => {
//   resolve("promise2.then");
//   console.log("promise2");
// });

// promise2.then((res) => {
//   console.log(res);
//   Promise.resolve().then(() => {
//     console.log("promise3");
//     setTimeout(function () {
//       console.log("promise4");
//     }, 0);
//   });
// });

// console.log("script end");
//script start、a1 start、a2、promise2、script end、promise1、a1 end、promise2.then、promise3、setTimeout、promise4
