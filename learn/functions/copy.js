// json深拷贝
const obj = {
    a: 1,
    b: {
        c: 2
    }
};
const newObj = JSON.stringify(obj);
const targetObj = JSON.parse(newObj);
targetObj.name = "Nicholas Zakas";
console.log('%c [ targetObj ]-11', 'font-size:13px; background:pink; color:#bf2c9f;', targetObj)

targetObj = {
    a: 1,
    b: {
        c: 2
    },
    name: "Nicholas Zakas"
};