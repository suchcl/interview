import Mock from "mockjs";

Mock.mock("/api/user/info", "get", () => {
    return Mock.mock({
        code: 200,
        success: true,
        message: "success",
        data: {
            currentPage: 1,
            pageSize: 10,
            "records|10": [
                {
                    "id|+1": 1,
                    "name": "@cname",
                    "role|1": ["管理员", "普通员工", "HR", "经理"],
                    "age": "@integer(18, 50)",
                    "weight|50-72": 51,
                    "job": "@job",
                    "height": /18|19|20|30|32/,
                    "idcard": /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/,
                    "mobile": /1[3456789]\d{9}/,
                    "createTime": "@datetime",
                    "gender|1": /男｜女/,
                    "sex|1": ["男", "女"]
                }
            ]
        }
    })
});

Mock.mock("/users/getTestUserList", "get", () => {
    return Mock.mock({
        code: 200,
        success: true,
        message: "success",
        data: {
            currentPage: 1,
            pageSize: 10,
            "userList|20": [
                {
                    "id|+1": 1,
                    "name": "@cname",
                    "role|1": ["管理员", "普通员工", "HR", "经理"],
                    "age": "@integer(18, 50)",
                    "weight|50-72": 51,
                    "job|1": ["建筑工人", "医生", "律师", "老师"],
                    "height": /18|19|20|30|32/,
                    "idcard": /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/,
                    "mobile": /1[3456789]\d{9}/,
                    "createTime": "@date('yyyy-MM-dd')",
                    "gender|1": ["男", "女"]
                }
            ]
        }
    });
});