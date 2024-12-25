<template>
    <div class="menu">
        <h2>header</h2>
        <ul class="nav">
            <li>
                <RouterLink to="/home">首页</RouterLink>
            </li>
            <li>
                <RouterLink to="/list">列表页</RouterLink>
            </li>
            <li>
                <router-link to="/test">功能测试页面</router-link>
            </li>
        </ul>
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
.nav {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
        margin: 0 15px;

        a {
            color: #333;

            &:hover {
                color: #f20;
            }

            &.router-link-active {
                color: #f20;
            }
        }
    }
}
</style>