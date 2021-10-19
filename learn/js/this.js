// var obj = {
//   foo: function () {
//     console.log("内部的function");
//     console.log(this);
//   },
//   bar: 1,
// };
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
// function foo() {
//   console.log(this.a);
// }

// function doFoo(fn) {
//   console.log(this);
//   fn();
// }

// var obj = { a: 1, foo };
// var a = 2;
// var obj2 = { a: 3, doFoo };
// obj2.doFoo(obj.foo); //obj2,2

// 10,严格模式下，全局的this会被指向到undefined
// "use strict";
// function foo() {
//   console.log(this.a);
// }
// function doFoo(fn) {
//   console.log(this);
//   fn();
// }
// var obj = { a: 1, foo };
// var a = 2;
// var obj2 = { a: 3, doFoo };
// obj2.doFoo(obj.foo); // obj2,异常提示，因为在严格模式下，全局的this指向了undefined，undefined是没有a属性的，所以就给出来异常信息提示

// 11
// function foo() {
//   console.log(this.a);
// }
// var obj = { a: 1 };
// var a = 2;
// foo(); //2
// foo.call(obj); // 1
// foo.apply(obj); // 1
// foo.bind(obj); // 什么都没有输出，bind会创建一个新的函数，需要手动调用才可以执行，否则不会执行
// foo.bind(obj)(); // 1

// 12
// var a = {
//   b: function () {
//     var func = function () {
//       console.log(this.c);
//     };
//     func();
//   },
//   c: "hello",
// };
// a.b(); // undefined

// 13
// var a = {
//   b: function () {
//     // b中的this，默认为a
//     var that = this;
//     var func = function () {
//       console.log(that.c); // that.c，本质上是a.c
//     };
//     func();
//   },
//   c: "hello",
// };
// a.b(); // hello

// 14
// var a = {
//   b: function () {
//     var func = function () {
//       console.log(this.c);
//     }.bind(this);
//     func();
//   },
//   c: "hello",
// };
// // a.b(); // hello

// 15
// var num = 9;
// var mymodule = {
//   num: 81,
//   getNum: function () {
//     console.log(this.num);
//   },
// };
// mymodule.getNum(); // 81

// var getNum = mymodule.getNum;
// getNum(); // 9

// getNum.bind(mymodule)(); // 创建一个新的函数，this指向创建新函数时的第一个参数，该行代码，也可以这么组织：

// var boundGetNum = getNum.bind(mymodule);
// boundGetNum(); // 81

// 16
// function foo() {
//   console.log(this.a);
// }
// var a = 2;
// foo.call(); // 2
// foo.call(null); // 2
// foo.call(undefined); // 2 虽然这3个调用都调用了call，但是给call传入了空、null或undefined，传入这些值，这些参数会被直接忽略

//  17
// var obj1 = {
//   a: 1,
// };
// var obj2 = {
//   a: 2,
//   foo1: function () {
//     console.log(this.a);
//   },
//   foo2: function () {
//     setTimeout(function () {
//       console.log(this);
//       console.log(this.a);
//     }, 0);
//   },
// };
// var a = 3;
// obj2.foo1(); // 2
// obj2.foo2(); // window 3

// 18
// var obj1 = {
//   a: 1,
// };
// var obj2 = {
//   a: 2,
//   foo1: function () {
//     console.log(this.a);
//   },
//   foo2: function () {
//     setTimeout(
//       function () {
//         console.log(this);
//         console.log(this.a);
//       }.call(obj1),
//       0
//     );
//   },
// };
// var a = 3;
// obj2.foo1(); //2
// obj2.foo2(); //obj1,1

// 19
// var obj1 = { a: 1 };
// var obj2 = {
//   a: 2,
//   foo1: function () {
//     console.log(this.a);
//   },
//   foo2: function () {
//     function inner() {
//       console.log(this);
//       console.log(this.a);
//     }
//     inner(); // 注意：谁调用的函数，this就指向谁，这里是window调用的，所以this指向的window
//   },
// };
// var a = 3;
// obj2.foo1(); // 2
// obj2.foo2(); //window, 3

// 20
// function foo() {
//   console.log(this.a);
// }
// var obj = {
//   a: 1,
// };
// var a = 2;
// foo(); //2
// foo.call(obj); //1
// foo().call(obj); // 2 类型错误，因为foo()执行后正常打印了数值2，最后对foo函数的返回值执行call，foo函数的返回值是undefined，所以就报错了

// 21
// function foo() {
//   console.log(this.a);
//   return function () {
//     console.log(this.a);
//   };
// }
// var obj = {
//   a: 1,
// };
// var a = 2;
// foo(); //2
// foo.call(obj); // 1
// foo().call(obj); // 2, 1 // foo()的返回值是一个函数，该函数的调用方是window，但是通过call将this指向了obj

// 22
// function foo() {
//   console.log(this.a);
//   return function () {
//     console.log(this.a);
//   };
// }
// var obj = {
//   a: 1,
// };
// var a = 2;
// foo(); //2
// foo.bind(obj); // 无输出  函数没有执行foo.bind(obj)()才是执行了
// foo().bind(obj); // 2，无输出   函数返回值只是重新绑定了this的指向，但是新函数没有执行，所以无输出

// 23
// function foo() {
//   console.log(this.a);
//   return function () {
//     console.log(this.a);
//   };
// }
// var obj = {
//   a: 1,
// };
// var a = 2;
// foo.call(obj)(); // 1,2返回值是一个函数，执行内部函数，其调用方是window，所以window.a是2

// 24  https://juejin.cn/post/6844904083707396109#heading-20   4.9
// var obj = {
//   a: "obj",
//   foo: function () {
//     console.log(
//       "%c [ foo ]",
//       "font-size:13px; background:pink; color:#bf2c9f;",
//       this.a
//     );
//     return function () {
//       console.log("inner", this.a);
//     };
//   },
// };

// var a = "window";
// var obj2 = {
//   a: "obj2",
// };
// obj.foo()(); // obj,window
// obj.foo.call(obj2)(); // obj2, window
// obj.foo().call(obj2); //obj, obj2

// 25
// var obj = {
//   a: 1,
//   foo: function (b) {
//     b = b || this.a;
//     return function (c) {
//       // console.log(this); // window
//       console.log(this.a + b + c);
//     };
//   },
// };
// var a = 2;
// var obj2 = {
//   a: 3,
// };

// obj.foo(a).call(obj2, 1); // 6
// /**
//  * 解释上面一行代码
//  * obj.foo(a) foo的this为obj，b得到赋值为2
//  * 返回值内部函数再次执行：内部函数的this指向window，但是通过call改变了this指向，所以内部函数中的this.a = 3;
//  * c为传入的参数：1
//  * 所以最终结果位：this.a + b + c = 3 + 2 + 1 = 6
//  */
// obj.foo.call(obj2)(1); // 6
// /**
//  * 解释上面一行代码
//  * obj.foo.call(obj2)：obj中foo原本的this为obj，但是通过call改变了this的指向，指向到了obj2
//  * 因此得到b = this.a也就是obj2中的a，即3
//  * 接下来返回值函数执行：返回值函数的this指向window，所以this.a = 2; c为传入的参数1
//  * 所以最终结果为this.a + b + c = 2 + 3 + 1 = 6
//  */

// 26
// function foo1() {
//   console.log(this.a);
// }
// var a = 1;
// var obj = {
//   a: 2,
// };
// var foo2 = function () {
//   foo1.call(obj);
// };
// foo2(); // 2
// foo2.call(window); // 2
// /**
//  * 解释上一行代码
//  * 虽然foo2.call(window)绑定了window，但是foo2的函数体内执行的是foo1，foo1绑定了obj
//  * 无论foo2怎么绑定，但是内部执行的代码已经有所绑定的对象了，都不会变
//  */

// 27
// function foo1(b) {
//   console.log(`${this.a} + ${b}`);
//   return this.a + b;
// }
// var a = 1;
// var obj = {
//   a: 2,
// };

// var foo2 = function () {
//   return foo1.call(obj, ...arguments);
// };
// var num = foo2(3);
// console.log(num); // 2 + 3, 5
// /**
//  * 本题并不难，但是需要注意别被乱七八糟的东西给迷惑了
//  */

// 28
// function foo(item) {
//   console.log(item, this.a);
// }
// var obj = {
//   a: "obj",
// };
// var a = "window";
// var arr = [1, 2, 3];
// arr.filter(function (i) {
//   console.log(i, this.a);
//   /**
//    * 1 obj
//    * 2 obj
//    * 3 obj
//    */
//   return i > 2;
// }, obj);

// 29
// function Person(name) {
//   this.name = name;
// }
// var name = "window";
// var person1 = new Person("Nicholas");
// console.log(person1.name); // Nicholas

// 30
// function Person(name) {
//   this.name = name;
//   this.foo1 = function () {
//     console.log(this.name);
//   };
//   this.foo2 = function () {
//     return function () {
//       console.log(this.name);
//     };
//   };
// }
// var person1 = new Person("p1");
// person1.foo1(); // p1
// person1.foo2()(); // 空值，没有输出
/**
 * 比较有意思的是，一开始给输出了一个window，原来是我之前代码中定义过name属性赋值为window，var name="window",代码删除了之后，浏览器也不会回收
 * 当前的浏览器标签页关掉了才可以回收之前window上的属性
 */

// 31
// var name = "Nicholas";
// function Person(name) {
//   this.name = name;
//   this.foo = function () {
//     console.log(this.name);
//     return function () {
//       console.log(this.name);
//     };
//   };
// }
// var person2 = {
//   name: "person2",
//   foo: function () {
//     console.log(this.name);
//     return function () {
//       console.log(this.name);
//     };
//   },
// };

// var person1 = new Person("person1");
// person1.foo()(); //person1,Nicholas
// person2.foo()(); //person2,Nicholas

// 32
// var name = "window";
// function Person(name) {
//   this.name = name;
//   this.foo = function () {
//     console.log(this.name);
//     return function () {
//       console.log(this.name);
//     };
//   };
// }

// var person1 = new Person("person1");
// var person2 = new Person("person2");
// person1.foo.call(person2)(); // person2,widnow
// person2.foo().call(person2); // person2,person2

// 33
// var obj = {
//   name: "obj",
//   foo1: () => {
//     // foo1箭头函数，其作用域是外层作用域，外层作用域也就是window
//     console.log(this.name);
//   },
//   foo2: function () {
//     console.log(this.name);
//     return () => {
//       console.log(this.name);
//     };
//   },
// };
// var name = "window";
// obj.foo1(); // window
// obj.foo2()(); // obj, obj

// 34
// var name = "window";
// var obj1 = {
//   name: "obj1",
//   foo: function () {
//     console.log(this.name);
//   },
// };
// var obj2 = {
//   name: "obj2",
//   foo: () => {
//     console.log(this.name);
//   },
// };
// obj1.foo(); // obj1
// obj2.foo(); // window

// 35
// var name = "window";
// var obj1 = {
//   name: "obj1",
//   foo: function () {
//     console.log(this.name);
//     return function () {
//       console.log(this.name);
//     };
//   },
// };

// var obj2 = {
//   name: "obj2",
//   foo: function () {
//     console.log(this.name);
//     return () => {
//       // this为定义箭头函数时的作用域，即obj2
//       console.log(this.name);
//     };
//   },
// };

// var obj3 = {
//   name: "obj3",
//   foo: () => {
//     // 箭头函数为定义时的外层作用域，即window
//     console.log(this.name);
//     return function () {
//       // 匿名函数，this指向window
//       console.log(this.name);
//     };
//   },
// };

// var obj4 = {
//   name: "obj4",
//   foo: () => {
//     // 箭头函数的this指向定义时的外层作用域，即window
//     console.log(this.name);
//     return () => {
//       // 箭头函数this指向定义时的作用域，该函数定义时的作用域为window
//       console.log(this.name);
//     };
//   },
// };

// obj1.foo()(); // obj1, window
// obj2.foo()(); //obj2, obj2
// obj3.foo()(); // window,window
// obj4.foo()(); // window,window

// 36
// var name = "window";
// function Person(name) {
//   this.name = name;
//   this.foo1 = function () {
//     console.log(this.name);
//   };
//   // 箭头函数的外部作用域为Person
//   this.foo2 = () => {
//     console.log(this.name);
//   };
// }
// var person2 = {
//   name: "person2",
//   foo2: () => {
//     console.log(this.name);
//   },
// };
// var person1 = new Person("person1");
// person1.foo1(); // person1
// person1.foo2(); // person1
// person2.foo2(); // window

// 36
// var name = "window";
// function Person(name) {
//   this.name = name;
//   this.foo1 = function () {
//     console.log(this.name);
//     return function () {
//       // 对象中的匿名函数，也指向window
//       console.log(this.name);
//     };
//   };
//   this.foo2 = function () {
//     console.log(this.name);
//     return () => {
//       // this指向外层作用域，对象中定义的，Person
//       console.log(this.name);
//     };
//   };
//   this.foo3 = () => {
//     // 箭头函数，this指向外部作用域Person
//     console.log(this.name);
//     return function () {
//       // 匿名函数，this指向window
//       console.log(this.name);
//     };
//   };
//   this.foo4 = () => {
//     // this指向Person
//     console.log(this.name);
//     return () => {
//       // 指向外部作用域的this，即Person
//       console.log(this.name);
//     };
//   };
// }
// var person1 = new Person("person1");
// person1.foo1()(); // person1, window
// person1.foo2()(); // person1, person1
// person1.foo3()(); // person1, window
// person1.foo4()(); // person1, person1

// 37
var name = "window";
var obj1 = {
  name: "obj1",
  foo1: function () {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  },
  foo2: () => {
    // this指向外层作用域：window
    console.log(this.name);
    return function () {
      // 匿名函数，this指向window
      console.log(this.name);
    };
  },
};

var obj2 = {
  name: "obj2",
};
obj1.foo1.call(obj2)(); // obj2,obj2 foo1返回函数的作用域被call给转向到了obj2
obj1.foo1().call(obj2); //obj1,obj1
/**
 * obj1.foo1().call(obj2) 解释
 * obj1.foo1()：打印的是obj1，比较容易理解
 * 但是内部的返回函数，按照常理应该是绑定给了obj2，所以返回 函数的this指向的是obj2，但是有一点我们需要注意：
 * 箭头函数的this指向，也是作用域，是在函数定义时定义的，而不是在函数执行时决定的，即便使用了call也不会改变这个规则
 */
obj1.foo2.call(obj2)(); // window,window
obj1.foo2().call(obj2); // window,obj2
