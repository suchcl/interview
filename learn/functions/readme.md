<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [js十大功能函数](#js%E5%8D%81%E5%A4%A7%E5%8A%9F%E8%83%BD%E5%87%BD%E6%95%B0)
  - [1. 防抖函数](#1-%E9%98%B2%E6%8A%96%E5%87%BD%E6%95%B0)
  - [2. 节流](#2-%E8%8A%82%E6%B5%81)
  - [3. 深拷贝](#3-%E6%B7%B1%E6%8B%B7%E8%B4%9D)
  - [4. 手写promise](#4-%E6%89%8B%E5%86%99promise)
  - [5. 异步控制并发数](#5-%E5%BC%82%E6%AD%A5%E6%8E%A7%E5%88%B6%E5%B9%B6%E5%8F%91%E6%95%B0)
  - [6. 继承](#6-%E7%BB%A7%E6%89%BF)
  - [7. 数组排序](#7-%E6%95%B0%E7%BB%84%E6%8E%92%E5%BA%8F)
  - [8. 数组去重](#8-%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D)
  - [9. 获取url参数](#9-%E8%8E%B7%E5%8F%96url%E5%8F%82%E6%95%B0)
  - [10. 发布订阅模式](#10-%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### js十大功能函数

#### 1. 防抖函数

```js
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
```

####  2. 节流


#### 3. 深拷贝

#### 4. 手写promise

#### 5. 异步控制并发数

#### 6. 继承

#### 7. 数组排序

#### 8. 数组去重

#### 9. 获取url参数

#### 10. 发布订阅模式