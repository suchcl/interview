<template>
    <div class="menu">
        <div class="nav">
            <RouterLink to="/home">首页</RouterLink>
            <RouterLink to="/list">列表页</RouterLink>
            <router-link to="/test">功能测试页面</router-link>
        </div>
        <div class="user-center">
            <div class="uname" @click="goUserList">{{ username }}</div>
            <Welcome :title="title" :message="message" />
        </div>
    </div>
</template>

<script lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import Welcome from "./Welcome.vue"
export default {
    name: 'Header',
    components: {
        Welcome
    },
    setup() {
        const router = useRouter();
        const title = ref("下午好");
        const message = ref("欢迎光临!");
        let username = ref("");
        const getuUsername = () => {
            username.value = localStorage.getItem("username") ?? "";
        };
        const goUserList = () => {
            // 路由跳转
            router.push("/userList");
        };
        onBeforeMount(() => {
            getuUsername();
        });
        return {
            title,
            message,
            username,
            goUserList
        };
    }
}
</script>

<style>
.menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .nav {
        display: flex;
        height: 100%;

        a {
            display: flex;
            align-items: center;
            color: #fff;
            height: 100%;
            padding: 0 15px;

            &:hover {
                background-color: #1677ff;
            }

            &.router-link-active {
                background-color: #1677ff;
            }
        }
    }

    .user-center {
        padding-right: 20px;
    }
}
</style>