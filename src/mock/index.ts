import Mock from "mockjs";
console.log('%c [  ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', "Mock 11111");

const dd = Mock.mock({
    "list|20": [{
        "id|+1": 1,
        "name": "@cname",
        "age|18-60": 1,
        "birth": "@date",
        "sex|1": true,
    }],
});

Mock.mock("/users/getTestUserList", "get", () => {
    console.log('%c [  ]-16', 'font-size:13px; background:pink; color:#bf2c9f;', "Mock 2222");
    return {
        code: 200,
        data: dd
    };
});




console.log('%c [ dd ]-17', 'font-size:13px; background:pink; color:#bf2c9f;', dd);