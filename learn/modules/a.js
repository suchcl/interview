// const a = 12;
// export { a };

// var arr = [1, 2, 3, 4, 5];
// // 命令式渲染，关心每一步，关心过程，得出结果
// var newARr = [];
// for (var i = 0; i < arr.length; i++) {
//   return newARr.push(arr[i] * 2);
// }

// // 声明式渲染，不关心中间过程，只关心最终结果
// var newArr1 = arr.map((item) => {
//   return item * 2;
// });

// var str = "Hello World!";
// console.log(typeof str);

var obj = new Object();
var obj2 = obj;
obj2.name = "Nicholas Zakas";
console.log(obj.name);
