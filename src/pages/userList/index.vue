<template>
    <div class="header">
        <h3>用户列表</h3>
        <button class="btn" @click="postUserList">获取用户列表</button>
    </div>
    <!-- <div v-for="item in userList" :key="item.id">{{ item.name }}</div> -->
    <UserItem v-for="item in userList" :item="item" :key="item.id"></UserItem>
</template>

<script lang="ts">
import { ref,onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
import UserItem from "./components/userItem.vue";
// import { getTestUserListService } from "@/service/user";
import request from "@/service/request";

export default {
    name: "UserList",
    components: {
        UserItem
    },
    setup() {
        const userList: any = ref([]);

        const getUserList = () => {
            request.get("/users/getTestUserList").then((res) => {
                const data = res.data.data;
                console.log('%c [ data ]-26', 'font-size:13px; background:pink; color:#bf2c9f;', data);
                userList.value = data.userList;
            });
        }
        const postUserList = () => {
            request.post("/uesrs/getTestUserList", {
                name: "test1111"
            }).then((res) => {
                const data = res.data.data;
                userList.value = data.userList;
            });
        };
        onBeforeMount(() => {
            getUserList();
            console.log('%c [ 父组件 ]-42', 'font-size:13px; background:pink; color:#bf2c9f;', "父组件中 onBeforeMount onBeforeMount");
        });
        onMounted(() => {
            console.log('%c [ 父组件 ]-45', 'font-size:13px; background:pink; color:#bf2c9f;', "父组件中 onMounted onMounted");
        });
        onBeforeUpdate(() => {
            console.log('%c [ 父组件 ]-49', 'font-size:13px; background:pink; color:#bf2c9f;', "父组件中 onBeforeUpdate onBeforeUpdate");
        });
        onUpdated(() => {
            console.log('%c [ 父组件 ]-53', 'font-size:13px; background:pink; color:#bf2c9f;', "父组件中 onUpdated onUpdated");
        });
        onBeforeUnmount(() => {
            console.log('%c [ 父组件 ]-57', 'font-size:13px; background:pink; color:#bf2c9f;', "父组件中 onBeforeUnmount onBeforeUnmount");
        });
        onUnmounted(() => {
            console.log('%c [ 父组件 ]-61', 'font-size:13px; background:pink; color:#bf2c9f;', "父组件中 onUnmounted onUnmounted");
        });
        return {
            userList,
            message: "用户列表",
            postUserList
        }
    }
}
</script>

<style scoped>
.btn {
    color: #fff;
    font-size: 15px;
    padding: 10px 15px;
    background-color: #4096ff;
    border-radius: 10px;
    outline: 0;
}
</style>