<template>
    <div class="menu">
        <div class="nav">
            <RouterLink to="/home">首页</RouterLink>
            <RouterLink to="/list">列表页</RouterLink>
            <router-link to="/test">功能测试页面</router-link>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Header',
    setup() {
        return {
        };
    }
}
</script>

<style>
.menu {
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
}
</style>