import request from "./request";
const getTestUserListService = () => {
    request.get("/uesrs/getTestUserList").then(res => {
        console.log('%c [ res ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', res);
    })
};

export { getTestUserListService };