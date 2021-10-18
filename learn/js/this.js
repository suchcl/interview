var obj = {
  foo: function () {
    console.log("内部的function");
    console.log(this);
  },
  bar: 1,
};
// var foo = obj.foo;
// foo();
// obj.foo();

// 1.
// var a = 10;
// function foo() {
//   console.log(this.a);
// }
// foo(); // 10

// 2
// a,b分别是使用let、const声明的，所以a、b两个变量不会被绑定到window上
// let a = 10;
// const b = 20;
// function foo() {
//   console.log(this.a);
//   console.log(this.b);
// }
// // foo函数，是在全局作用域执行的，所以函数foo的this指向的是window
// foo(); //undefined,undefined
// console.log(window.a); // undefined

// 3
// var a = 1;
// function foo() {
//   var a = 2;
//   console.log(this); // window
//   console.log(this.a); // 1,需要注意下限定词this,this是window
//   console.log(a); // 2
// }
// foo();

// 4
// var a = 1;
// function foo() {
//   var a = 2;
//   function inner() {
//     console.log(this.a);
//   }
//   inner();
// }
// foo();

// function add() {
//   var b = 12;
//   function inner() {
//     console.log(this);
//   }
//   inner();
// }
// add();

// var num = 1;
// var obj = {
//   num: 2,
//   getNum: function () {
//     return (function (self) {
//       return self.num;
//     })(this);
//   },
// };
// console.log(obj.getNum()); // 2

// 5
// function foo() {
//   console.log(this.a);
// }
// var obj = { a: 1, foo };
// var a = 2;
// obj.foo(); // 1  谁最后调用的函数，函数中的this就指向谁，案例中obj最后调用的foo，那么函数foo中this指向的就是foo

// 6
// function foo() {
//   console.log(this.a);
// }
// var obj = { a: 1, foo };
// var a = 2;
// var foo2 = foo;
// obj.foo(); // 1 obj最后调用的foo，所以foo内部this指向的是obj
// foo2(); // 2 foo2 = foo,是将foo函数的内存地址赋值给了foo2，所以this指向的还是window

// 7
// function foo() {
//   console.log(this.a);
// }
// var obj = { a: 1, foo };
// var a = 2;
// var foo2 = obj.foo;
// var obj2 = {
//   a: 3,
//   foo2: obj.foo,
// };
// obj.foo(); // 1,obj调用的函数,foo的
// foo2(); // 2
// obj2.foo2(); // 3

// 8
// function foo() {
//   console.log(this.a);
// }
// function doFoo(fn) {
//   console.log(this); // window
//   fn();
// }
// var obj = { a: 1, foo };
// var a = 2;
// doFoo(obj.foo); // window 2,注意obj.foo没有小括号，就说明这个函数并没有执行，所以obj.foo是没有打印输出的，只是一个参数而已

// 9
function foo() {
  console.log(this.a);
}

function doFoo(fn) {
  console.log(this);
  fn();
}

var obj = { a: 1, foo };
var a = 2;
var obj2 = { a: 3, doFoo };
obj2.doFoo(obj.foo); //obj2,2
