<template>
    <div class="menu">
        <div class="nav">
            <RouterLink to="/home">首页</RouterLink>
            <RouterLink to="/list">列表页</RouterLink>
            <router-link to="/test">功能测试页面</router-link>
        </div>
        <div class="user-center">
            <p>{{ message }}</p>
            <Welcome :message="message" />
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Welcome from "./Welcome.vue"
export default {
    name: 'Header',
    components: {
        Welcome
    },
    setup() {
        const message = ref("欢迎光临!");
        return {
            message
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