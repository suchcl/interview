const originalObj = {
    name: "Alice",
    age: 18,
    date: new Date(),
    map: new Map([["key", "value"]])
};

console.log('%c [ 原始对象 ]-2', 'font-size:13px; background:pink; color:#bf2c9f;', originalObj);

const targetObj = structuredClone(originalObj); // 深拷贝
targetObj.map.set("key2", 1888);

console.log('%c [ 深拷贝对象 ]-11', 'font-size:13px; background:pink; color:#bf2c9f;', targetObj)


function deepCopy(source, hash = new WeakMap()){
    if(obj === null || typeof obj !== "object"){
        return source;
    }

    if(hash.has(source)){
        return hash.get(source);
    }

    let target = Array.isArray(source) ? [] : {};
    Reflect.ownKeys(source).forEach(key => {
        const val = source[key];
        if(typeof val === "object" && val !== null){
            target[key] = deepCopy(val, hash);
        }else {
            target[key] = val;
        }
    })

    return target;
}